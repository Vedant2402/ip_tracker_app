import React from 'react';
import './IPInfo.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix marker icon (Leaflet default doesn't load correctly in many setups)
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const IPInfo = ({ data }) => {
  return (
    <div className="ip-info">
      <h2>Details for IP: {data.query}</h2>
      <p><strong>Location:</strong> {data.city}, {data.regionName}, {data.country}</p>
      <p><strong>Timezone:</strong> {data.timezone}</p>
      <p><strong>ISP:</strong> {data.isp}</p>

      <div className="map-container">
        <MapContainer
          center={[data.lat, data.lon]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '300px', width: '100%', marginTop: '1rem' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
          <Marker position={[data.lat, data.lon]}>
            <Popup>
              {data.city}, {data.country}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default IPInfo;
