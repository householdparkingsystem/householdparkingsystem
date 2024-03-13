import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavigationBar from './NavigationBar';

type  Parking ={
  houseid: number;
  location: string;
  address: string;
  priceperhour: number;
  starttime: number;
  endtime: number;
}

export default function TodoDetails() {
    const {location} = useParams();
    const [show, setShow] = useState<Parking>();

      useEffect(() => {
          fetch(`/api/house//use'+ houseid`)
          .then(response => response.json())
          .then(data=>setShow(data))
      }, [location])
    return (
      <div>
        <NavigationBar/>
      <div>
        <h1>Details</h1>
        <div>
          <h1>{show?.location}</h1>
          <h3>{show?.address}</h3>
          <p>{show?.priceperhour}</p>
          <p>{show?.starttime}</p>
          <p>{show?.endtime}</p>
        </div>
      </div>
      </div>
    )
}
