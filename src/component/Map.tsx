import { MapContainer, TileLayer, Rectangle } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';

import { MIN_LAT, MAX_LAT, MIN_LON, MAX_LON } from '../constant';
import MapMarker from './MapMarker';

const MapWrapper = styled.div`
  .leaflet-container {
    height: 100vh;
    width: 100vw;
    z-index: 1;

    .isOutOfBounds {
      filter: hue-rotate(150deg);
    }

    .leaflet-marker-icon,
    .leaflet-marker-shadow {
      transition: transform 1s ease-in-out;
    }
  }
`;

type MapProps = {
  machines: Machine[];
};

const Map = ({ machines }: MapProps) => {
  return (
    <MapWrapper>
      <MapContainer center={[48.143336105, 11.5235835]} zoom={16}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {machines.map((machine) => (
          <MapMarker key={machine.id} machine={machine} />
        ))}
        <Rectangle
          bounds={[
            [MIN_LAT, MIN_LON],
            [MAX_LAT, MAX_LON],
          ]}
          color="#00ac00"
        />
      </MapContainer>
    </MapWrapper>
  );
};

export default Map;
