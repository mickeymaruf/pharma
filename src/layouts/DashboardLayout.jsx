import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import DashboardNav from '../Pages/Shared/DashboardNav';
import useAdmin from '../hooks/useAdmin';
import { useAuth } from '../contexts/AuthProvider';

const DashboardLayout = () => {
    const { user } = useAuth();
    const [idAdmin] = useAdmin(user?.email);
    return (
        <div>
            <DashboardNav />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {
                            idAdmin &&
                            <>
                                <li><Link to="/dashboard/allusers">All Users</Link></li>
                                <li><Link to="/dashboard/add-doctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/manage-doctors">Manage Doctors</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;