import { React, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useNavigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';

const DashboardLayout = ({ children }) => {
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();
    const signOut = useSignOut()
    
    // TODO: Replace with private auth routing
    useEffect(() => {
        if(!isAuthenticated) {
            navigate('/login', 
                { state: { message: "Please login to access this resource." } 
            });
        }
    },[isAuthenticated, navigate]);

    const handleSignOut = () => {
        signOut();
        navigate('/'); // Go home
    };

    // Note: <Outlet> renders the current route selected
    return (
        <>
            <div>
                <h2>CourtFinder</h2>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
            { children } 
            <Outlet />  
        </>
    );
}

export default DashboardLayout;
