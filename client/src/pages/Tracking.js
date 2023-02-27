import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ParcelTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  const handleTrackingNumberChange = (event) => {
    setTrackingNumber(event.target.value);
  }

  const handleTrackButtonClick = () => {
    // Make API call to retrieve tracking information
    fetch(`https://api.example.com/parcel-tracking?trackingNumber=${trackingNumber}`)
      .then(response => response.json())
      .then(data => setTrackingResult(data));
  }

  return (
    <div className='container'>
      <h1 className='px-5 m-5'>Parcel Tracking</h1>
      <input className='px-5 mx-5 mb-5' type="text" value={trackingNumber} onChange={handleTrackingNumberChange} />
      <Button variant="outline-success"  onClick={handleTrackButtonClick}>Track</Button>
      {trackingResult && (
        <div>
          <h2>Tracking Information</h2>
          <p>Status: {trackingResult.status}</p>
          <p>Location: {trackingResult.location}</p>
          <p>Estimated Delivery Date: {trackingResult.estimatedDeliveryDate}</p>
        </div>
      )}
    </div>
  );
}

export default ParcelTracking;