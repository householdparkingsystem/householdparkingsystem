import React, { useState } from 'react'
import NavigationBar from './NavigationBar';

const Post: React.FunctionComponent = () => {
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
    const [priceperhour, setPriceperhour] = useState('');
    const [starttime, setStarttime] = useState('');
    const [endtime, setEndtime] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState('');

    const handlePost = async () => {
        if (!location || !address || !priceperhour || !starttime || !endtime) {
            setError('Please enter all details');
            return;
        }

        try {
            const response = await fetch('/api/house/sql/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 1234',
                },
                body: JSON.stringify({ location, address, priceperhour, starttime, endtime }),
            });
            const data = await response.text();
            console.log('Response:', data);
            setLoaded(true);
            setError('');
        } catch (error) {
            console.log(error);
            setError('Error posting details');
        }
    };

    return (
        <div>
            <NavigationBar/>
        <div>
            <div className="flex min-h-screen flex-col justify-center bg-black py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="animation-bounce mt-6 text-center text-3xl font-extrabold text-white">Post a Parking spot</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="animation-pulse bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                                <div className="mt-1">
                                    <input id="location" name="location" type="text" className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" value={location} onChange={(e) => setLocation(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                <div className="mt-1">
                                    <input id="address" name="address" type="text" autoComplete="address" required className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" value={address} onChange={(e) => setAddress(e.target.value)} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="priceperhour" className="block text-sm font-medium text-gray-700">Price Per Hour</label>
                                <div className="mt-1">
                                    <input id="priceperhour" name="priceperhour" type="text" autoComplete="priceperhour" required className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" value={priceperhour} onChange={(e) => setPriceperhour(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div>
                                    <label htmlFor="starttime" className="block text-sm font-medium text-gray-700">Start Time</label>
                                    <div className="mt-1">
                                        <input id="starttime" name="starttime" type="number" autoComplete="starttime" required className="block w-44 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" value={starttime} onChange={(e) => setStarttime(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="endtime" className="block text-sm font-medium text-gray-700">End Time</label>
                                    <div className="mt-1">
                                        <input id="endtime" name="endtime" type="number" autoComplete="endtime" required className="block w-44 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" value={endtime} onChange={(e) => setEndtime(e.target.value)} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="animation-bounce flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={handlePost}>
                                    Post
                                </button>
                            </div>
                        </form>
                        {error && <p className="mt-2 text-center text-red-500">{error}</p>}
                        {loaded && <p className="mt-2 text-center text-gray-700">Details posted successfully!</p>}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Post;
