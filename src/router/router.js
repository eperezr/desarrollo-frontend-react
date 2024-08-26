import { createBrowserRouter } from 'react-router-dom';

import Product from '../screems/Product';

import App from "../App";
import Default from '../screems/Default';
import LoginForm from '../screems/Forms/LoginForm';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/product',
                element: <Product />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
        ]
    }
],
);

export default routes;