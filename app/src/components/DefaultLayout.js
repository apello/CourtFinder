import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { CssVarsProvider } from '@mui/joy/styles';
import ColorSchemeToggle from './ColorSchemeToggle';

const DefaultLayout = ({ children }) => {
    return (
        <CssVarsProvider>
            <header>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
                    <Link to="/">
                        <h2 style={{ margin: 0 }}>CourtFinder</h2>
                    </Link>
                    <ColorSchemeToggle />
                </div>
            </header>
            <main>
                {children}
                <Outlet />  
            </main>
        </CssVarsProvider>
    );
}

export default DefaultLayout;

