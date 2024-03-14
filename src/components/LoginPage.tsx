import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const LoginPage: React.FunctionComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/users/' + username, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer 1234',
                },
            });
            const data = await response.json();
            console.log('Response:', data);
            if (data.user.results[0].password === password) {
                console.log('Login Successful');
                setMessage('Login successful');
                localStorage.setItem('username', username); // Store the username in local storage
                navigate('/selection');
            } else {
                console.log('Invalid Username or Password');
                setMessage('Invalid Username or Password');
            }
        } catch (error) {
            console.log('Error:', error);
            setMessage('Error logging in');
        }
    };

    return (
        <div>
            <nav className="flex items-center justify-center flex-wrap bg-black p-6">
                <div className="flex items-center flex-shrink-0 text-white">
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
                        className="lucide lucide-square-parking"
                    >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
                    </svg>
                    <p className="text-white ml-2">Park Hub</p>
                </div>
            </nav>
            <div className="flex min-h-screen flex-col justify-center bg-black py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="animation-bounce text-center text-3xl font-extrabold text-white">Login</h2>
                    <p className="mt-2 text-center text-sm text-white">Welcome back! Please enter your credentials.</p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="animation-pulse bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <div className="mt-1">
                                    <input id="username" name="username" type="text" className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="animation-bounce flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={handleLogin}>
                                    Login
                                </button>
                            </div>
                            <div className="flex justify-center items-center">
                                <a href="/signup" className="text-blue-800">Signup</a>
                            </div>
                            {message && <p className="mt-2 text-center text-red-500">{message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
