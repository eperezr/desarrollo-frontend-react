import { motion } from 'framer-motion'
import { saveFormData } from "../redux/form/formActions";
import { useDispatch } from "react-redux";

const ModalInfo = ({ visible, message,type, onClose }) => {
    const dispatch = useDispatch();
    const logout = () => {
      dispatch(saveFormData({ email: "", password: "", username: "" }));
      onClose('logout');
    };

    if (!visible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <motion.div
                className='notification-success'
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p>{message}</p>
                </div>
                <button className="close-btn" onClick={onClose}>x</button>
        {type === 'logout' && (
          <div className="button-container">
            <button type="button" onClick={logout}>Clck here to logout!!!</button>
          </div>
        )}
            </motion.div>
        </div>
    );
};



export default ModalInfo; 