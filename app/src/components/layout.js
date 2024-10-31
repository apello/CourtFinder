import React from 'react';
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <>
            <h2>CourtFinder</h2>
            { children } 
            <Outlet />  {/* <Outlet> renders the current route selected. */}
        </>
    );
}

export default Layout;
