import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Parking = {
    houseid: number;
    location: string;
    address: string;
    priceperhour: number;
    starttime: number;
    endtime: number;
}

export default function DisplaySpots() {
    const [spots, setSpots] = useState<Parking[]>([]); 
    const { location: selectedLocation } = useParams();

    useEffect(() => {
        fetch('/api/house/' + selectedLocation)
            .then((response) => response.json())
            .then((data) => {
                setSpots(data.query.results);
            });
    }, [selectedLocation]);

    console.log('data is fetched successfully');

    // Define a CSS class to style each box
    const boxClass = "bg-white p-2 rounded-lg mb-4";
    
    // Define a CSS class to style the container
    const containerClass = "grid grid-cols-3 gap-4";

    return (
        <div className='text-white ml-10 mt-10 bg-black flex flex-col justify-start'>
            <h1>Available Parking Locations:</h1>
            <div className="bg-black text-white p-4 rounded mb-4">
                <h2>Selected Location:</h2>
                <div className="mt-1 ml-4">
                    <input id="selectedLocation" name="selectedLocation" type="text" readOnly className="block w-24 text-black appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm" value={selectedLocation} />
                </div>
            </div>
            <div className={containerClass}>
                {spots.map((book, index) => (
                    <div key={index} className={boxClass}>
                        <Link to={`/preview/${book.location}`} className="text-black">
                            <p className="ml-4">Location: {book.location}</p>
                            <p className="ml-4">Address: {book.address}</p>
                            <p className="ml-4">Price Per Hour: {book.priceperhour}</p>
                            <p className="ml-4">Start Time: {book.starttime}</p>
                            <p className="ml-4">End Time: {book.endtime}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
