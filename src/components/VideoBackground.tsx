import React, { useEffect, useRef, useState } from 'react';
import './VideoBackground.css';

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setVideoLoaded(true);
      };
      video.addEventListener('loadeddata', handleLoadedData);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <div className="video-container">
      <div className="video-background">
        <img
          className={`background-image ${videoLoaded ? 'hidden' : ''}`}
          src="/background_static.jpeg"
          alt="Background Placeholder"
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`background-video ${videoLoaded ? 'visible' : ''}`}
        >
          <source src="/background_mobile.mp4" type="video/mp4" />
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