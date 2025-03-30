import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthorized = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Not Authorized</h1>
            <p>You do not have permission to access this page.</p>
            <Link to="/">Go to Homepage</Link>
        </div>
    );
};

export default NotAuthorized;
