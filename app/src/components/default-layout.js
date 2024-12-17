import React from 'react';
import { Outlet } from "react-router-dom";
import IconButton from '@mui/joy/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';

function ColorSchemeToggle() {
    const { mode, setMode } = useColorScheme();
    return (
        <IconButton
            size="lg"
            variant="soft"
            color="neutral"
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            sx={{
                position: 'fixed',
                top: '1rem',
                right: '1rem',
                zIndex: 999,
                borderRadius: '50%',
                boxShadow: 'sm',
            }}
        >
            {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
    );
}

const DefaultLayout = ({ children }) => {
    return (
        <CssVarsProvider>
            {/* Dark/Light Mode Toggle */}
            <ColorSchemeToggle />
            <header>
                <h2>CourtFinder</h2>
            </header>
            <main>
                {children}
                <Outlet />  
            </main>
        </CssVarsProvider>
    );
}

export default DefaultLayout;

