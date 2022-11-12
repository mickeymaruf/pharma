import { createBrowserRouter } from 'react-router-dom';
import Root from '../../Layouts/Root';
import Home from '../Home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default router;