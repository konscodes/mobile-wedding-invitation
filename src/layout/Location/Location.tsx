import styled from '@emotion/styled';
import data from 'data.json';
// import Address from './Address.tsx';
// import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      {/* <Map /> */}
      <MapImage src={`/map.jpeg`} alt="Map" />
      <MapButtons />
      {/* <Address /> */}
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const MapImage = styled.img`
  max-width: 100%;  /* Ensure the image is responsive */
  height: auto;
`;