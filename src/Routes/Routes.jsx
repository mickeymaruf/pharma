import { createBrowserRouter } from 'react-router-dom'
import Appointment from '../Pages/Appointment/Appointment'
import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'
import Home from "../Pages/Home/Home"
import Root from "../layouts/Root"
import Dashboard from '../Pages/Dashboard/Dashboard'
import RequireAuth from './RequireAuth'
import DashboardLayout from '../layouts/DashboardLayout'
import MyAppointment from '../Pages/Dashboard/MyAppointment'
import AllUsers from '../Pages/Dashboard/AllUsers'

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
            }
        ]
    },
    {
        path: '/dashboard',
        element: <RequireAuth><DashboardLayout /></RequireAuth>,
        children: [
            {
                path: "/dashboard",
                element: <MyAppointment />
            },
            {
                path: "/dashboard/allusers",
                element: <AllUsers />
            }
        ]
    }
])

export default router