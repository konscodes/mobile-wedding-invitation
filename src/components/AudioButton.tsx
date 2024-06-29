import React, { useState } from 'react';
import styled from '@emotion/styled';

import volumeOnIcon from '/volume-on.svg';
import volumeOffIcon from '/volume-off.svg';
import songFile from '/song.mp3';

const AudioButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AudioButtonContainer onClick={toggleAudio}>
      <audio ref={audioRef} src={songFile} />
      <AudioIcon src={isPlaying ? volumeOnIcon : volumeOffIcon} alt="Audio Icon" />
    </AudioButtonContainer>
  );
};

export default AudioButton;

const AudioButtonContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, .4);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, .4);
  }
`;

const AudioIcon = styled.img`
  width: 16px;
  height: 16px;
`;