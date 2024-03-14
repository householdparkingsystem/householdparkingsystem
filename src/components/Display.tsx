import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from './NavigationBar';

type HouseDetails = {
  houseid: number;
  location: string;
  address: string;
  priceperhour: number;
  starttime: number;
  endtime: number;
};

const Display: React.FC = () => {
  const { houseid } = useParams<{ houseid: string }>();
  const [houseDetails, setHouseDetails] = useState<HouseDetails>();

  const data = new Date();
  useEffect(() => {
    fetch(`/api/house/use/${houseid}`)
      .then((response) => response.json())
      .then((data) => setHouseDetails(data.query.results[0]));
  }, [houseid]);

  return (
    <div className="bg-black text-white min-h-screen">
      <NavigationBar />
      <div className="px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Details :</h1>
        <div className="max-w-md mx-auto relative">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 text-black">
            {houseDetails && (
              <div>
                <h1 className="text-xl font-bold">Location: {houseDetails.location}</h1>
                <p className="text-lg">Address: {houseDetails.address}</p>
                <p>Price Per Hour: {houseDetails.priceperhour} </p>
                <p>Start Time: {houseDetails.starttime} am</p>
                <p>End Time: {houseDetails.endtime} pm</p>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 text-center mb-4">
              <div className="bg-green-500 text-white inline-block px-4 py-2 rounded-lg">Booked</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
