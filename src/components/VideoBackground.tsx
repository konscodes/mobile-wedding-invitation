import React, { useEffect } from 'react';
import './VideoBackground.css';

const VideoBackground: React.FC = () => {
  useEffect(() => {
    const video = document.querySelector("video");

    const playVideo = () => {
      if (video) {
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Autoplay started
              console.log("Video is playing");
            })
            .catch((error) => {
              // Autoplay was prevented
              console.error("Autoplay prevented:", error);
              video.muted = true;
              video.play().catch((error) => {
                console.error("Video play failed after setting muted:", error);
                // No controls will be shown even if it fails to autoplay
              });
            });
        }
      }
    };

    playVideo();
  }, []);

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
