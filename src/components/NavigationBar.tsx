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
        <nav className='flex justify-between items-end bg-black px-6 py-3'>
            <div className="flex items-center">
                <Link to="/selection" className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-square-parking text-white"
                    >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
                    </svg>
                    <p className="text-white ml-2">Park Hub</p>
                </Link>
            </div>

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
