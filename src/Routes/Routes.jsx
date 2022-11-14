import { createBrowserRouter } from 'react-router-dom'
import Appointment from '../Pages/Appointment/Appointment'
import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'
import Home from "../Pages/Home/Home"
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
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
])

export default router