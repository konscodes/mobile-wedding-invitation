import React from 'react';
import './VideoBackground.css';

const VideoBackground: React.FC = () => {
  return (
    <div className="video-container">
      <div className="video-background">
        <video autoPlay loop muted playsInline preload="auto">
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-overlay">
        <img src="/overlay.png" alt="Overlay" />
      </div>
    </div>
  );
};

export default VideoBackground;
