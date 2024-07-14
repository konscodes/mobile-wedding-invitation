import React from 'react';
import { Heading1 } from '@/components/Text';
import Wrapper from '@/components/Wrapper';
import Container from '@/layout/Container';
import FloatingBar from '@/layout/FloatingBar/FloatingBar';
import GalleryWrap from '@/layout/Gallery/GalleryWrap';
import Invitation from '@/layout/Invitation/Invitation';
import Location from '@/layout/Location/Location';
import Information from '@/layout/Information/Information';
import Main from '@/layout/Main/Main';
import VideoBackground from './components/VideoBackground';
import AudioButton from './components/AudioButton';
import useIntersectionObserver from './hooks/useIntersectionObserver';

const App: React.FC = () => {
  const [galleryRef, isGalleryVisible] = useIntersectionObserver<HTMLDivElement>();
  const [invitationRef, isInvitationVisible] = useIntersectionObserver<HTMLDivElement>();
  const [locationRef, isLocationVisible] = useIntersectionObserver<HTMLDivElement>();
  const [informationRef, isInformationVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <Container>
      <VideoBackground />
      <AudioButton />
      <Wrapper>
        <Main />
      </Wrapper>
      <Wrapper ref={invitationRef} className={`hidden ${isInvitationVisible ? 'fade-in' : ''}`}>
        <Heading1>Invitation</Heading1>
        <Invitation />
      </Wrapper>
      <Wrapper ref={locationRef} className={`hidden ${isLocationVisible ? 'fade-in' : ''}`}>
        <Heading1>Location</Heading1>
        <Location />
      </Wrapper>
      <Wrapper ref={informationRef} className={`hidden ${isInformationVisible ? 'fade-in' : ''}`}>
        <Heading1>The day</Heading1>
        <Information />
      </Wrapper>
      <Wrapper ref={galleryRef} className={`hidden ${isGalleryVisible ? 'fade-in' : ''}`}>
        <Heading1>Gallery</Heading1>
        <GalleryWrap />
      </Wrapper>
      <FloatingBar isVisible={isGalleryVisible} />
    </Container>
  );
}

export default App;
