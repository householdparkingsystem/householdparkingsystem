import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
          fetch(`/api/house/'+ location `)
          .then(response => response.json())
          .then(data=>setShow(data))
      }, [location])
    return (
      <div>
        <h1>TodoDetails</h1>
        <div>
          <h1>{show?.location}</h1>
          <h3>{show?.address}</h3>
          <p>{show?.priceperhour}</p>
        </div>
      </div>
    )
}
