import React from 'react';
import './VideoBackground.css';

const VideoBackground: React.FC = () => {
  return (
    <div className="video-container">
      <div className="video-background">
        <video autoPlay loop muted playsInline preload="auto" src="/background.mp4"> </video>
      </div>
      <div className="video-overlay">
        <img src="/overlay.png" alt="Overlay" />
      </div>
    </div>
  );
};

export default VideoBackground;
