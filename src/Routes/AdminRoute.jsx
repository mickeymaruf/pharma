import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (isAdminLoading) {
        return <div className='text-center text-3xl mt-10'>Loading...</div>
    }

    if (isAdmin) {
        return children;
    }

    return <Navigate to="/" />
};

export default AdminRoute;