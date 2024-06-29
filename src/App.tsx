import { useEffect, useRef, useState } from 'react';
import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Information from '@/layout/Information/Information.tsx';
import Main from '@/layout/Main/Main.tsx';
import VideoBackground from './components/VideoBackground.tsx';
import AudioButton from './components/AudioButton.tsx';


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
      <Container>
        <VideoBackground />
        <AudioButton />
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper ref={galleryRef}>
          <Heading1>Invitation</Heading1>
          <Invitation />
        </Wrapper>
        <Wrapper>
          <Heading1>Location</Heading1>
          <Location />
        </Wrapper>
        <Wrapper>
          <Heading1>Schedule</Heading1>
          <Information />
        </Wrapper>
        <Wrapper>
          <Heading1>Gallery</Heading1>
          <GalleryWrap />
        </Wrapper>
        <FloatingBar isVisible={isVisible} />
      </Container>
  );
}

export default App;
