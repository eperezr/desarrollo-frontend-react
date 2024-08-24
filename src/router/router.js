import { createBrowserRouter } from 'react-router-dom';

import Product from '../screems/Product';

import App from "../App";
import Default from '../screems/Default';


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
        ]
    }
],
);

export default routes;