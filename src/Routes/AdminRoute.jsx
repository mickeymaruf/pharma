import React from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useAuth } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (isAdminLoading) {
        return <Spinner />
    }

    if (isAdmin) {
        return children;
    }

    return <Navigate to="/" />
};

export default AdminRoute;