"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const rowImages = [
  ["/assets/img1.png", "/assets/img2.png", "/assets/img6.jpeg"],
  ["/assets/img4.png", "/assets/img5.png", "/assets/img3.png"],
  ["/assets/pp-group-1.jpg", "/assets/img2.png", "/assets/img4.png"],
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Duplicate images to ensure scrollable content
  const duplicatedRows = rowImages.map((images) => [
    ...images,
    ...images,
    ...images,
  ]);

  useEffect(() => {
    rowRefs.current.forEach((container, index) => {
      if (!container) return;

      let isUserInteracting = false;
      const duration = 10000; // Same speed for all rows
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

  return (
    <div className="w-full h-full flex flex-col items-center gap-y-6 z-0 mb-10">
      <h1 className="font-museo-moderno text-3xl font-bold">Our Gallery</h1>
      <p className="text-center">
        Welcome to our gallery. Here are some highlights from our clients.
      </p>

      <div className="w-full flex flex-col gap-y-6">
        {duplicatedRows.map((images, rowIndex) => (
          <div
            key={rowIndex}
            ref={(el) => (rowRefs.current[rowIndex] = el)}
            className="flex overflow-x-auto space-x-4 w-full snap-x hide-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="w-48 h-48 flex-shrink-0 relative snap-center"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="cursor-pointer rounded-lg object-cover"
                  onClick={() => setSelectedImage(src)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal remains the same */}
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
