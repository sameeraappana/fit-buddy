import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './css/RunMap.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


// Fixing leaflet's default icon issue in CRA
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const RunMap = ({ distanceCovered, yearlyGoal }) => {
  const initialPosition = [35.7796, -78.6382];
  const [position, setPosition] = useState(initialPosition); // initial position

  useEffect(() => {
    const newPosition = calculateNewPosition(distanceCovered);
    setPosition(newPosition);
  }, [distanceCovered]);

  const calculateNewPosition = (distance) => {
     // Convert distance from miles to degrees approximately (1 degree ≈ 69 miles)
    const lat = initialPosition[0]; 
    const lng = initialPosition[1] - (distance / 69);
    return [lat, lng];
  };

  const calculateDestinationPosition = (start, distance) => {
    // Convert distance from miles to degrees approximately (1 degree ≈ 69 miles)
    const degrees = distance / 69; 
    const lat = start[0];
    const lng = start[1] - degrees;
    return [lat, lng];
  }
  const destinationPosition = calculateDestinationPosition(initialPosition, yearlyGoal);

//   const destinationIcon = L.icon({
//     iconUrl: require('./assets/destination-marker.png').default,
//     iconSize: [32, 32], // size of the icon
//     iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
//     popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
//   });

  return (
    <MapContainer center={position} zoom={13} className="MapContainer">
      <TileLayer
  url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
  attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
/>
      <Marker position={position}>
        <Popup>Your Run Buddy</Popup>
      </Marker>
      <Marker position={destinationPosition} icon={L.divIcon({ className: 'destination-marker'})}> 
        <Popup>Destination</Popup>
      </Marker>  
      {/* <Polyline positions={[initialPosition, destinationPosition]} color="red" /> */}
      <Polyline positions={[initialPosition, position]} color="blue" />
    </MapContainer>
  );
};

export default RunMap;
