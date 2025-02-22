"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Skeleton from "../components/skeleton";

const rowImages = [
  [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
  ],
  [
    "/img5.png",
    "/img6.jpeg",
    "/pp-group-1.jpg",
    "/img7.jpeg",
  ],
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set()); // Track loading images
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    rowRefs.current.forEach((container, index) => {
      if (!container) return;

      let isUserInteracting = false;
      const duration = 10000; // Smooth scrolling speed
      const startScroll =
        index % 2 === 0 ? 0 : container.scrollWidth - container.clientWidth;
      const endScroll =
        index % 2 === 0 ? container.scrollWidth - container.clientWidth : 0;

      const handleUserInteraction = () => {
        isUserInteracting = true;
      };

      container.addEventListener("wheel", handleUserInteraction);
      container.addEventListener("touchstart", handleUserInteraction);
      container.addEventListener("scroll", handleUserInteraction);

      const startTime = Date.now();

      const animate = () => {
        if (isUserInteracting) return;
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        container.scrollLeft =
          startScroll + (endScroll - startScroll) * progress;
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);

      return () => {
        container.removeEventListener("wheel", handleUserInteraction);
        container.removeEventListener("touchstart", handleUserInteraction);
        container.removeEventListener("scroll", handleUserInteraction);
      };
    });
  }, []);

  const setRowRef = (index: number) => (el: HTMLDivElement | null) => {
    rowRefs.current[index] = el;
  };

  // Track when an image starts and finishes loading
  const handleImageLoad = (src: string) => {
    setLoadingImages((prev) => {
      const newSet = new Set(prev);
      newSet.delete(src);
      return new Set(newSet);
    });
  };

  const handleImageLoading = (src: string) => {
    setLoadingImages((prev) => new Set(prev).add(src));
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-y-6 z-0 mb-10 md:mt-20">
      <h1 className="font-museo-moderno text-3xl font-bold md:text-6xl">
        Our Gallery
      </h1>
      <p className="text-center md:text-xl">
        Welcome to our gallery. Here are some highlights from our clients.
      </p>
      <div className="w-full flex flex-col gap-y-6 items-center">
        {rowImages.map((images, rowIndex) => (
          <div
            key={rowIndex}
            ref={setRowRef(rowIndex)}
            className="flex overflow-x-auto space-x-4 w-full snap-x hide-scrollbar lg:justify-center"
            style={{ scrollBehavior: "smooth" }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="w-72 h-72 flex-shrink-0 relative snap-center"
              >
                {/* Show Skeleton while loading */}
                {loadingImages.has(src) && (
                  <Skeleton className="absolute top-0 left-0 w-full h-full rounded-lg z-10" />
                )}

                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className={`cursor-pointer rounded-lg object-cover transition-opacity duration-500 ${
                    loadingImages.has(src) ? "opacity-0" : "opacity-100"
                  }`}
                  onClick={() => setSelectedImage(src)}
                  onLoad={() => handleImageLoad(src)}
                  onLoadingComplete={() => handleImageLoad(src)}
                  onError={() => handleImageLoad(src)} // In case of error, remove skeleton
                  onLoadStart={() => handleImageLoading(src)} // Track when image starts loading
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[80vw] h-[80vh]">
            <Image
              src={selectedImage}
              alt="Selected"
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-10 right-5 text-white text-2xl z-50"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
