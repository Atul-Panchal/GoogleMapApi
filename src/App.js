import React, { useEffect, useState } from 'react';
import Map from './components/Map';
import axios from 'axios';

const App = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <div>
      <h1>My Location Map</h1>
      {location.lat !== 0 && location.lng !== 0 ? (
        <Map location={location} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
