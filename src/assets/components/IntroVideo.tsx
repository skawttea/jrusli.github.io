import { useRef, useState } from 'react';
import videoFile from '/videos/IntroAudio.mp4';

function BackgroundVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="video-container" onClick={toggleMute}>
      <video
        ref={videoRef}
        src={videoFile}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="homepage-video"
        onClick={toggleMute} 
      />
       {isMuted && <div className="mute-overlay">Scotty Ninh <img src="/play_button.png" alt="play_button" className="play-button"/></div>}
    </div>
  );
}

export default BackgroundVideo;