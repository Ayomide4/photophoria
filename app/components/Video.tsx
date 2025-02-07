import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Skeleton from "./skeleton"; // Ensure this is correctly imported

export default function Video({
  videoSrc,
  className,
}: {
  videoSrc: string;
  className: string;
}) {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Show Skeleton while loading */}
      {isLoading && (
        <Skeleton className="absolute top-0 left-0 w-full h-full z-10" />
      )}

      {/* Video */}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoading(false)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
