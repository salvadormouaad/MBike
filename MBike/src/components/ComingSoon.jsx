import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = ({ pageName }) => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>{pageName} Page Coming Soon</h1>
            <p>We're working on this page. Check back soon!</p>
            <Link to="/">Go to Homepage</Link>
        </div>
    );
};

export default ComingSoon;
