import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';

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
    const [bookedSpot, setBookedSpot] = useState<number | null>(null);
    const [disabledButtons, setDisabledButtons] = useState<boolean[]>([]);
    const { location: selectedLocation } = useParams();

    useEffect(() => {
        fetch('/api/house/' + selectedLocation)
            .then((response) => response.json())
            .then((data) => {
                setSpots(data.query.results);
                // Initialize disabledButtons state with false for each button
                setDisabledButtons(new Array(data.query.results.length).fill(false));
            });
    }, [selectedLocation]);

    const handleBook = (index: number) => {
        // If the button is already disabled, do nothing
        if (disabledButtons[index]) return;

        // Set the booked spot and disable all other buttons
        setBookedSpot(index);
        setDisabledButtons(disabledButtons.map((value, i) => i !== index));
    };

    return (
        <div>
            <NavigationBar/>
            <div className="flex flex-col justify-center items-center mt-5">
                <div className="bg-black text-white p-4 rounded mb-4 justify-center items-center">
                    <h2>Entered Location:</h2>
                    <div className="mt-2">
                        <input id="selectedLocation" name="selectedLocation" type="text" readOnly className="block w-24 text-black appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm" value={selectedLocation} />
                    </div>
                </div>
                <h1 className='mb-4 text-white'>Available Parking Locations:</h1>
                <div className="grid grid-cols-3 gap-20">
                    {spots.map((book, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg">
                            <div className="text-black">
                                <p>Location: {book.location}</p>
                                <p>Address: {book.address}</p>
                                <p>Price Per Hour: {book.priceperhour}</p>
                                <p>Start Time: {book.starttime} am</p>
                                <p>End Time: {book.endtime} pm</p>
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <button onClick={() => handleBook(index)} disabled={disabledButtons[index]} className={`bg-gray-900 text-white px-4 py-2 rounded ${disabledButtons[index] ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                    Book
                                </button>
                                {bookedSpot === index && <p className="ml-2 text-sm text-gray-700">Successfully booked!</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>  
    );
}
