import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/operations/AUTH_API";
import logo from '../assets/logo.png';

const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const logoutHandler = () => {
        dispatch(logout(navigate));
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav className="bg-white shadow-md py-4 border border-b border-gray-200">
            <div className="container mx-auto px-32 flex justify-between items-center">
                <Link to={`/`}>
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-14 w-14"
                        />
                        <span className="font-bold text-xl text-blue-800">MentorConnect</span>
                    </div>
                </Link>

                <div className="md:flex space-x-8 items-center">
                    <Link
                        to="/mentors"
                        className="text-gray-700 hover:text-blue-800 transition-colors duration-300 hover:underline"
                    >
                        Explore Mentors
                    </Link>
                    <Link
                        to="/blogs"
                        className="text-gray-700 hover:text-blue-800 transition-colors duration-300 hover:underline"
                    >
                        Blogs
                    </Link>
                    <Link
                        to="/webinars"
                        className="text-gray-700 hover:text-blue-800 transition-colors duration-300 hover:underline"
                    >
                        Webinars
                    </Link>
                    <Link
                        to="/chat-hub"
                        className="text-gray-700 hover:text-blue-800 transition-colors duration-300 hover:underline"
                    >
                        Chat Hub
                    </Link>
                    {token ? (
                        <div className="relative" ref={menuRef}>
                            <button
                                onClick={toggleMenu}
                                className="text-gray-700 hover:text-blue-800 transition-colors duration-300 focus:outline-none"
                            >
                                &#9776; {/* Hamburger Menu Icon */}
                            </button>

                            {menuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg transition-opacity duration-300 opacity-100 z-50">
                                    <div className="p-4 border-b">
                                        <p className="font-semibold">{user?.firstName} {user?.lastName}</p>
                                        <p className="text-sm text-gray-600 line-clamp-1">{user?.email}</p>
                                    </div>
                                    <ul>
                                        <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                                            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>My Dashboard</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                                            <Link to={user?.userType === 'Mentor' ? `/mentor/${user?._id}` : `/user/${user?._id}`} onClick={() => setMenuOpen(false)}>My Profile</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                                            <Link to="/messages" onClick={() => setMenuOpen(false)}>My Messages</Link>
                                        </li>

                                        {user?.userType === 'mentor' && (
                                            <>
                                                <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                                                    <Link to="/apply-for-mentor" onClick={() => setMenuOpen(false)}>Apply for Mentor</Link>
                                                </li>
                                                <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                                                    <Link to="" onClick={() => setMenuOpen(false)}>Schedule & Fees</Link>
                                                </li>
                                            </>
                                        )}

                                        {user?.userType === 'Mentee' && (
                                            <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                                                <Link to="/shortlisted-mentors" onClick={() => setMenuOpen(false)}>Shortlisted Mentors</Link>
                                            </li>
                                        )}

                                        <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                                            <button onClick={logoutHandler}>Logout</button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 hover:scale-105 transform transition-all duration-300"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
