import React from 'react'
import BikeSlice from './Bikes/SliceBikes/BikeSlice.jsx'
import { useSelector } from 'react-redux'

export default function App() {
  const bikes = useSelector((state) => state.Bikes)
  return (
    <div>
      <h1>Mountain Bikes</h1>
      {bikes.MountainBike.FullSuspension.AMS.map((bike) => (
        <div key={bike.Id}>
          <h2>Bike ID: {bike.Id}</h2>
          <p><strong>Taille:</strong> {bike.Taille.join(', ')}</p>
          <p><strong>Frein:</strong> {bike.Frein}</p>
          <p><strong>Chaine:</strong> {bike.Chaine}</p>
          <p><strong>Roues:</strong> {bike.Roues}</p>
          <p><strong>Poids:</strong> {bike.Poids}</p>
          <p><strong>Price:</strong> {bike.Price}</p>
          <img src={bike.Images} alt={`Bike ${bike.Id}`} />
        </div>
      ))}
    </div>
  );
}
