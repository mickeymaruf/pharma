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
import AdminRoute from './AdminRoute'
import AddDoctor from '../Pages/Dashboard/Doctors/AddDoctor'
import ManageDoctors from '../Pages/Dashboard/Doctors/ManageDoctors'

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
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: "/dashboard/add-doctor",
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: "/dashboard/manage-doctors",
                element: <AdminRoute><ManageDoctors /></AdminRoute>
            },
        ]
    }
])

export default router