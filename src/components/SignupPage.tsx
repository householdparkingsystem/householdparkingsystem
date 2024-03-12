import React, { useState } from 'react';

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contactnum, setContactnum] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      if (username && password) {
        const response = await fetch('/api/users/sql/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorizstion': 'Bearer 1234',
          },
          body: JSON.stringify({ username, password, contactnum }),
        });
        const data = await response.text();
        if (response.ok) {
          setMessage('User successfully registered');
        } else {
          setMessage('Failed to register user');
        }
      } else {
        setMessage('Please enter both username and password');
      }
    } catch (error) {
      setMessage('Error: ' +error.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-black py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="animation-bounce mt-6 text-center text-3xl font-extrabold text-white">Sign Up</h2>
        <p className="mt-2 text-center text-sm text-white">Welcome! Please enter your credentials.</p>
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
              <label htmlFor="contactnum" className="block text-sm font-medium text-gray-700">Contact Number</label>
              <div className="mt-1">
                <input id="contactnum" name="contactnum" type="number" autoComplete="current-contactnum" required className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" onChange={(e) => setContactnum(e.target.value)} />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            <div>
              <button type="submit" className="animation-bounce flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={handleSignup}>Signup</button>
            </div>
            <div className="flex justify-center items-center">
              <a href="/" className="text-blue-800">Login</a>
            </div>
          </form>
          {message && <p className="text-center text-red-500 mt-4">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
