import { createBrowserRouter } from 'react-router-dom';

import Product from '../screems/Product';

import App from "../App";
import Default from '../screems/Default';
import LoginForm from '../screems/Forms/LoginForm';

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react' : '/';


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
{
    basename:    basename
}

);

export default routes;