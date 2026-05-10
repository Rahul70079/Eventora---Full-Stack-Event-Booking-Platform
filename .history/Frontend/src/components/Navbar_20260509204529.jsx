import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaTicketAlt } from 'react-icons/fa';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-gray-900 shadow-lg">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
                        <FaTicketAlt /> Event Book
                    </Link>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <Link to="/" className="text-gray-200 transition cursor-pointer hover:text-white">Events</Link>
                        {user ? (
                            <>
                                <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} className="text-gray-200 transition hover:text-white">Dashboard</Link>
                                <button onClick={handleLogout} className="px-4 py-2 text-white transition bg-gray-700 rounded-md hover:bg-black">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-gray-200 transition hover:text-white">Login</Link>
                                <Link to="/register" className="px-4 py-2 font-semibold text-gray-900 transition bg-white rounded-md hover:bg-gray-100">Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
