import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { username, email } = useSelector(state => state.form.formData);
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
            </ul>
            <ul>
                {username ? (
             <li>
                <Link to="/login">Usuario: {username} Email: {email}</Link>
            </li>): 
            (<li>
                <Link to="/login">Login Form</Link>
            </li>
            )}
      </ul>

        </nav>
    );
};

export default Navbar;