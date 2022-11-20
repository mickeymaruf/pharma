import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useAuth } from '../contexts/AuthProvider';

const RequireAuth = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <Spinner />
    }
    if (user?.uid) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default RequireAuth;