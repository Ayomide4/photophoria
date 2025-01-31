import { useRef } from "react";

export default function Video({
  videoSrc,
  className,
}: {
  videoSrc: string;
  className: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover ${className}`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
