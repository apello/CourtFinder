import React from 'react';
import { Outlet } from "react-router-dom";

const DefaultLayout = ({ children }) => {
    // Note: <Outlet> renders the current route selected

    return (
        <>
            <h2>CourtFinder</h2>
            { children } 
            <Outlet />  
        </>
    );
}

export default DefaultLayout;
