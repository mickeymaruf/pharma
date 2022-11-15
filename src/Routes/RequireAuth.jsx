import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const RequireAuth = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <div className='text-center text-3xl mt-10'>Loading...</div>
    }
    if (user?.uid) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default RequireAuth;