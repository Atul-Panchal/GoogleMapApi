import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ location }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCwyaHSD_WhUhUjn5-OsAFMj_bETP9sIPE">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={location}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
