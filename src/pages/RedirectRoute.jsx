/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useNavigate } from 'react-router-dom';

function RedirectRoute() {
    
    const navigate = useNavigate();
    
    React.useEffect(() => {
        navigate('/');
    }, [navigate]);

    return (
        <>
        </>
    )
}

export default RedirectRoute