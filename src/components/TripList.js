import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import './TripList.css'

const TripList = () => {
  const [url, setUrl] = useState('http://localhost:3000/trips')
  const { data:trips, isPending, error } = useFetch(url)

  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ul>
        {trips && trips.map((trip) => (
          <div key={trip.id}>
            <li><h3>{trip.title}:</h3> <p>{trip.price}</p></li>
          </div>
        ))}
      </ul>
      <div className='filters'>
        <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
          European Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
      </div>
    </div>
  )
}

export default TripList