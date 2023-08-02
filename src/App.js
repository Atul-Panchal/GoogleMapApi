import React, { useState } from 'react';
import Map from '.components/Map';

const App = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [inputLocation, setInputLocation] = useState('');

  const handleInputChange = (event) => {
    setInputLocation(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const [lat, lng] = inputLocation.split(',').map((coord) => parseFloat(coord.trim()));

    setLocation({ lat, lng });
  };

  return (
    <div>
      <h1>Geo Location Map</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputLocation}
          onChange={handleInputChange}
          placeholder="Enter latitude and longitude"
        />
        <button type="submit">Show Location</button>
      </form>
      {location.lat !== 0 && location.lng !== 0 ? (
        <Map location={location} />
      ) : (
        <p>Please enter a valid latitude and longitude.</p>
      )}
    </div>
  );
};

export default App;
