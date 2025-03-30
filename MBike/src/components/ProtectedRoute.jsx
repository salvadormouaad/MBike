import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from './Loader.jsx';
import { selectIsAuthenticated, selectUser, selectFetchStatus } from '../selectors/authSelectors';

const ProtectedRoute = ({ children, requireAuth = true, requiredRole }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector(selectUser);
    const fetchStatus = useSelector(selectFetchStatus);
    // Show loader while fetching user
    if (fetchStatus === 'loading' || (fetchStatus === 'idle' && isAuthenticated)) {
        return <Loader />;
    }

    // If requireAuth is false (e.g., /login, /register), redirect authenticated users to /
    if (!requireAuth) {
        return isAuthenticated ? <Navigate to="/" replace /> : children;
    }

    // If not authenticated, redirect to /login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }


    // If a role is required and the user doesn't have it, redirect to /not-authorized
    if (requiredRole && user?.role !== requiredRole) {
        return <Navigate to="/not-authorized" replace />;
    }

    // If all checks pass, render the children
    return children;
};

export default ProtectedRoute;
