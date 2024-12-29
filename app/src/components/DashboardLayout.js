import { React, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useNavigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import ColorSchemeToggle from './ColorSchemeToggle';
import { CssVarsProvider } from '@mui/joy/styles';

const DashboardLayout = ({ children }) => {
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();
    const signOut = useSignOut();

    // TODO: Replace with private auth routing
    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         navigate('/login', 
    //             { state: { message: "Please login to access this resource." } 
    //         });
    //     }
    // }, [isAuthenticated, navigate]);

    const handleSignOut = () => {
        signOut();
        navigate('/'); // Go home
    };

    return (
        <CssVarsProvider>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <header 
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 20px',
                        width: '100%',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h2 style={{ margin: 0, marginRight: '20px' }}>CourtFinder</h2>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button 
                            style={{
                                padding: '8px 15px', 
                                border: 'none', 
                                borderRadius: '5px', 
                                cursor: 'pointer', 
                                marginRight: '20px',
                            }}
                        >
                            List Court
                        </button>
                        {isAuthenticated ? (
                             <button 
                                onClick={handleSignOut} 
                                style={{
                                    padding: '8px 15px', 
                                    border: 'none', 
                                    borderRadius: '5px', 
                                    cursor: 'pointer', 
                                    marginRight: '20px',
                                }}
                            >
                                Sign Out
                            </button>
                        ):(
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Link to='/login'>
                                    <button 
                                        style={{
                                            padding: '8px 15px', 
                                            border: 'none', 
                                            borderRadius: '5px', 
                                            cursor: 'pointer', 
                                            marginRight: '20px',
                                        }}
                                    >
                                        Login
                                    </button>
                                </Link>
                                <Link to='/signup'>
                                    <button 
                                        style={{
                                            padding: '8px 15px', 
                                            border: 'none', 
                                            borderRadius: '5px', 
                                            cursor: 'pointer', 
                                            marginRight: '20px',
                                        }}
                                    >
                                        Sign up
                                    </button>

                                </Link>
                            </div>
                        )}
                        <ColorSchemeToggle />
                    </div>
                </header>

                <div style={{ flex: '1 0 auto' }}>
                    {children}
                    <Outlet />
                </div>

                <footer 
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '15px 20px',
                        borderTop: '1px solid #ddd',
                        marginTop: '20px',
                        backgroundColor: '#f8f9fa',
                    }}
                >
                    <div>
                        <h4 style={{ margin: 0 }}>CourtFinder</h4>
                    </div>

                    <nav style={{ display: 'flex', gap: '15px' }}>
                        <a 
                            href="/about" 
                            style={{
                                textDecoration: 'none',
                                color: '#0077b6',
                                fontWeight: 'bold',
                            }}
                        >
                            About
                        </a>
                        <a 
                            href="/contact" 
                            style={{
                                textDecoration: 'none',
                                color: '#0077b6',
                                fontWeight: 'bold',
                            }}
                        >
                            Contact
                        </a>
                        <a 
                            href="/privacy" 
                            style={{
                                textDecoration: 'none',
                                color: '#0077b6',
                                fontWeight: 'bold',
                            }}
                        >
                            Privacy Policy
                        </a>
                    </nav>

                    <div>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#6c757d' }}>
                            © {new Date().getFullYear()} CourtFinder. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </CssVarsProvider>
    );
}

export default DashboardLayout;