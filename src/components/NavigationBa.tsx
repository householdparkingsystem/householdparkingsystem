import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = ({ isLoggedIn, setIsLoggedIn }: { isLoggedIn: boolean, setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('username'); // Remove username from local storage
        setIsLoggedIn(false); // Update login state
        navigate('/login'); // Redirect to login page
    };

    return (
        <nav className='flex justify-end items-end bg-black mr-12'>
            <ul className='flex flex-row gap-3 text-white bg-black'>
                {/* Other navigation links */}
                {isLoggedIn && (
                    <li>
                        <Link to='/location'>Welcome! {localStorage.getItem('username')}</Link>
                    </li>
                )}
                {/* Logout link */}
                {isLoggedIn && (
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                )}
                {/* Other navigation links */}
            </ul>
        </nav>
    );
}

export default NavigationBar;
