import { React, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useNavigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import ColorSchemeToggle from './ColorSchemeToggle';
import { CssVarsProvider } from '@mui/joy/styles';

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
    // Todo: Make header component
    return (
        <CssVarsProvider>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', width: '100%' }}>
                {/* Left-aligned section for title */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2 style={{ margin: 0, marginRight: '20px' }}>CourtFinder</h2>
                </div>
        
                {/* Right-aligned section for sign-out button and color scheme toggle */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button 
                        onClick={handleSignOut} 
                        style={{
                            padding: '8px 15px', 
                            border: 'none', 
                            borderRadius: '5px', 
                            cursor: 'pointer', 
                            marginRight: '20px'
                        }}
                    >
                        Sign Out
                    </button>
                    <ColorSchemeToggle />
                </div>
            </header>
        
            {/* Main content */}
            <div>{children}</div>
            <Outlet />  
        </CssVarsProvider>
    );
}

export default DashboardLayout;
