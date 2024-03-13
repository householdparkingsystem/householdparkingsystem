import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar: React.FC = () => {
    const [username, setUsername] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username'); // Clear username from local storage
        setUsername(null); // Clear username state
        navigate('/'); // Redirect to login page
    };

    return (
        <nav className='flex justify-end items-end bg-black mr-10'>
            <ul className='flex flex-row gap-5 text-white bg-black mt-1'>
                {username && (
                    <li>
                        <div className="border border-white rounded px-2 py-1 ">
                            <span className="text-white">{`Welcome! ${username}`}</span>
                        </div>
                    </li>
                )}

                {/* Other navigation links */}
                {/* <li className='mt-1'>
                    <Link to='/location'>Location</Link>
                </li> */}
                
                <li className='mt-1'>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
