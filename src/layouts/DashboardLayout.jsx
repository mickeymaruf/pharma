import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import DashboardNav from '../Pages/Shared/DashboardNav';

const DashboardLayout = () => {
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
                    <ul className="menu p-4 w-64 bg-white">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        <li><Link to="/dashboard/allusers">All Users</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;