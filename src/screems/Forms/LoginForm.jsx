import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData} from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
//import ModalError from "../../components/ModalError";


import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({ username :'', email: '', password: ''});

    const [showModalInfo, setShowModalInfo] = useState(false);
    const [modalMessage, setModalMessage] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [type, setType] = useState('');


    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        if (values.password !== form.password){
        setModalMessage("contraseña incorrecta");
        setShowModalInfo(true);
        return;
        }
        dispatch(saveFormData(values));
    };

    const showModal = () => {
        setShowModalInfo(true);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

      const handleLogout = () => {
        setModalMessage(`${form.formData.username}, quieres salir?`);
        setShowModalInfo(true);
        setType("logout");
      };
    
      const hideModalInfo = (logout) => {
        setShowModalInfo(false);
        if (logout === 'logout') 
            resetForm();
      };

    return (
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalInfo
                visible={showModalInfo}
                message={modalMessage}
                type={type}
                onClose={hideModalInfo}
            />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Password</label>
                        <input
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            id="password" 
                            value={values.password} 
                            onChange={handleChange}
                        />
                        <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? "ocultar" : "mostrar"}
                        </button>
                    </div>
                    <div>
                        {form.formData.username ? (
                        <a className="App-link logout" onClick={handleLogout}>Logout</a>
                        ) : (
                        <div className="button-container">
                        <button type="submit">Login</button>
                        </div>
                        )};
                    
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <button onClick={showModal}>Mostrar Modal</button>
                    </div>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm