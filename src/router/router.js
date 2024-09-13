import { createBrowserRouter } from 'react-router-dom';

import Product from '../screems/Product';

import App from "../App";
import Default from '../screems/Default';
import LoginForm from '../screems/Forms/LoginForm';
import LandingPage from '../screems/LandingPage.jsx';
import PageDictionary from '../screems/Dictionary/_components/PageDictionary.jsx'

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react' : '/';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: '/dictionary',
                element: <PageDictionary />,
            },
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