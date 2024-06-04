import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { currentUser } = useAuth();
    return (
        <Route
            {...rest}
            element={
                currentUser
                    ? children
                    : <Navigate to="/login" replace />
            }
        />
    );
}

export default PrivateRoute;