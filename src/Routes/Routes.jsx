import { createBrowserRouter } from 'react-router-dom'
import Appointment from '../components/Appointment/Appointment'
import Login from '../components/Auth/Login'
import Home from "../components/Home/Home"
import Root from "../layouts/Root"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/appointment',
                element: <Appointment />
            }
        ]
    }
])

export default router