import styled from '@emotion/styled';
import data from 'data.json';
import Button from '@/components/Button.tsx';

const MapButtons = () => {
  const { naverMap, googleMap } = data.mapInfo;

  return (
    <MapButtonWrapper>
      <Button onClick={() => window.open(naverMap)}>Naver Map</Button>
      <Button onClick={() => window.open(googleMap)}>Google Map</Button>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 16px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;
