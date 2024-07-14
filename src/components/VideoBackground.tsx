import React, { useEffect, useRef, useState } from 'react';
import './VideoBackground.css';

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayFailed, setAutoplayFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => {
        setAutoplayFailed(false);
      };

      const handlePause = () => {
        setAutoplayFailed(true);
      };

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      // Try to play the video to check if autoplay works
      video.play().catch(() => {
        setAutoplayFailed(true);
      });

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  return (
    <div className="video-container">
      <div className="video-background">
        <img
          className={`background-image ${!autoplayFailed ? 'hidden' : ''}`}
          src="/background_static.jpeg"
          alt="Background Placeholder"
        />
        {!autoplayFailed && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`background-video ${!autoplayFailed ? 'visible' : ''}`}
          >
            <source src="/background_mobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="video-overlay">
        <img src="/overlay.png" alt="Overlay" />
      </div>
    </div>
  );
};

export default VideoBackground;
