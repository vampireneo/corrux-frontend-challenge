import { FC } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon, IconOptions } from 'leaflet';
import styled from 'styled-components';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import { isOutOfBounds } from '../utils';

const MachineInfo = styled.div`
  display: flex;
  width: 220px;

  label {
    flex: 1;
  }

  div {
    flex: 1.2;
  }
`;

const defaultIconOption: IconOptions = {
  iconUrl: markerIcon,
  shadowUrl: iconShadow,
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
};

const DefaultIcon = icon(defaultIconOption);

const isOutOfBoundsIcon = icon({
  ...defaultIconOption,
  className: 'isOutOfBounds',
});

type MarkerProps = {
  machine: Machine;
};

type MachineInfoRowProps = {
  name: string;
};

const MachineInfoRow: FC<MachineInfoRowProps> = ({ name, children }) => (
  <MachineInfo>
    <label>{name}:</label>
    <div>{children}</div>
  </MachineInfo>
);

const MapMarker = ({ machine }: MarkerProps) => {
  return (
    <Marker
      position={[machine.location.latitude, machine.location.longitude]}
      icon={isOutOfBounds(machine.location) ? isOutOfBoundsIcon : DefaultIcon}
    >
      <Popup>
        <MachineInfoRow name="Make">{machine.model.make}</MachineInfoRow>
        <MachineInfoRow name="Model">{machine.model.model}</MachineInfoRow>
        <MachineInfoRow name="Category">
          {machine.model.category}
        </MachineInfoRow>
        <MachineInfoRow name="Serial Number">
          {machine.serial_number}
        </MachineInfoRow>
        <MachineInfoRow name="Out of Bounds">
          {isOutOfBounds(machine.location) ? 'Yes' : 'No'}
        </MachineInfoRow>
      </Popup>
    </Marker>
  );
};

export default MapMarker;
