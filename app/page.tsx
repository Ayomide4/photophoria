"use client";
import Image from "next/image";
import Skeleton from "./components/Skeleton";
import { useEffect, useRef, useState } from "react";
import Video from "./components/Video";
import { RightArrow } from "@/public/assets/svg";
import Link from "next/link";
import PackageOverview from "./components/PackageOverview";
import TestimonialCard from "./components/TestimonialCard";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// Define the Feature interface
interface Feature {
  included: boolean;
  description: string;
}

// Define the Package interface
interface Package {
  title: string;
  features: Feature[]; // features is an array of Feature objects
}

// Define the packages array with the correct type
const packages: Package[] = [
  {
    title: "Standard",
    features: [
      { included: true, description: "4 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      { included: true, description: "Unlimited Digital Pictures & Gifs" },
      { included: false, description: "Booth Attendant" },
      {
        included: false,
        description: "4x6 prints with Custom print overlay templates",
      },
      { included: false, description: "Photo Album" },
    ],
  },
  {
    title: "Essential",
    features: [
      { included: true, description: "5 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      { included: true, description: "Booth Attendant" },
      {
        included: true,
        description: "4x6 prints with Custom print overlay templates",
      },
      { included: false, description: "Photo Album" },
    ],
  },
  {
    title: "Premium",
    features: [
      { included: true, description: "5 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      { included: true, description: "Booth Attendant" },
      {
        included: true,
        description: "4x6 prints with Custom print overlay templates",
      },
      { included: true, description: "Photo Album" },
    ],
  },
];

const testimonialsPeople: { name: string; description: string }[] = [
  {
    name: "Mark T.",
    description:
      "“The team at PhotoPhoria made everything so easy. Their photo booth was a hit at our corporate event, and the props were a blast!”",
  },
  {
    name: "Emily & Jason",
    description:
      "“PhotoPhoria was the highlight of our wedding! The photobooth added so much fun, and the pictures turned out amazing. Everyone loved it!”",
  },
  {
    name: "Sarah L.",
    description:
      "“Our guests couldn’t stop talking about the photo booth! The photos are such a fun way to relive the night—thank you, PhotoPhoria!”",
  },
];

const mapPackages = packages.map((item) => (
  <PackageOverview
    key={item.title}
    title={item.title}
    features={item.features}
  />
));

const renderTestimonials = testimonialsPeople.map((item) => (
  <TestimonialCard
    key={item.name}
    name={item.name}
    description={item.description}
  />
));

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isLoading, setLoading] = useState(true);

  // Reusable scroll-to-middle function
  const scrollToMiddle = (container: HTMLElement) => {
    if (container.children.length >= 2) {
      const middleIndex = Math.floor(container.children.length / 2);
      const middleElement = container.children[middleIndex] as HTMLElement;

      const scrollPosition =
        middleElement.offsetLeft -
        container.offsetWidth / 2 +
        middleElement.offsetWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "auto", // or 'smooth' for animation
      });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      scrollToMiddle(containerRef.current);
    }
    if (testimonialsRef.current) {
      scrollToMiddle(testimonialsRef.current);
    }
    setLoading(false); // Set loading to false after scrolling
  }, []); //TODO: add loading animation for all images for example opening twitter for the first time
  // - add mute/unmute button for video
  // - animations
  // - make consts file

  return (
    <div className=" w-full h-full flex  flex-col items-center gap-y-6">
      <div className="w-full h-[31.25rem]  rounded-xl flex flex-col-reverse relative ">
        {isLoading && (
          <Skeleton className="w-full h-full absolute z-10 rounded-xl" />
        )}
        <Image
          src="/assets/pp-group-1.jpg"
          alt="group photo of people using the photo booth"
          className="rounded-xl object-cover w-full h-full absolute z-10"
          onLoadingComplete={() => setLoading(false)}
          fill
        />
        <div className="flex flex-col items-center  mx-2 z-20">
          <div className="mb-4 text-white px-4">
            <p className=" font-red-hat-display  text-nowrap">
              Introducing PhotoPhoria ‘s Photo Booth Rental
            </p>
            <h1 className="font-museo-moderno text-3xl/8 font-bold">
              Your Moment, Perfectly Captured{" "}
            </h1>
          </div>
          <button className="w-full h-10 rounded-full bg-primary text-lg font-bold mb-4">
            Book Now
          </button>
        </div>
      </div>
      {/* about */}
      <div className="w-full  flex flex-col items-center  ">
        <div className="w-full h-96 relative rounded-full">
          <Video
            videoSrc="/assets/photophoria1.mp4"
            className="rounded-b-none rounded-t-xl"
          />
        </div>
        <div className="w-full  relative rounded-t-none rounded-b-xl bg-primary p-4">
          <h2 className="font-bold text-3xl/8 font-museo-moderno mb-4 ">
            Turning Moments Into Magic
          </h2>
          <p className="mb-2 text-lg">
            At PhotoPhoria, we specialize in photobooth rentals that bring
            connection, joy, and unforgettable memories to every event—weddings,
            birthdays, corporate gatherings, and more.{" "}
          </p>
          <p className="text-lg mb-2">
            Our stylish photobooths capture the laughter, love, and moments that
            make your celebration unique.
          </p>

          <Link
            href="/about"
            className="w-14 h-14 rounded-xl bg-black flex items-center justify-center"
          >
            <RightArrow />
          </Link>
        </div>
      </div>
      {/* Package scroll */}
      <div className="w-full  relative rounded-xl bg-[#EBE4E0] flex flex-col items-center py-6 ">
        <h2 className="font-bold text-4xl font-museo-moderno mb-6 ">
          Our Packages
        </h2>

        <div
          className="flex overflow-x-auto gap-4 pb-4 no-scrollbar w-full px-4"
          ref={containerRef}
        >
          {mapPackages}
        </div>
      </div>
      {/* gallery */}
      <div className="w-full  gap-y-2 flex flex-col">
        {/* Flex container for the first two images */}
        <div className="w-full flex gap-x-2">
          <div className="flex-1 relative h-52 ">
            <Image
              src="/assets/img1.png"
              alt="two women taking a photo"
              fill // Fills the parent container
              className="object-cover rounded-3xl" // Ensures the image fits without stretching
            />
          </div>
          <div className="flex-1 relative h-52">
            <Image
              src="/assets/img2.png"
              alt="a woman taking a photo"
              fill // Fills the parent container
              className="object-cover rounded-3xl" // Ensures the image fits without stretching
            />
          </div>
        </div>

        {/* Full-width third image */}
        <div className="relative w-full h-52">
          <Image
            src="/assets/img3.png"
            alt="women throwing a party"
            fill // Fills the parent container
            className="object-cover rounded-3xl" // Ensures the image fits without stretching
          />
        </div>
        <div className="relative w-full h-52">
          <Image
            src="/assets/img4.png"
            alt="man posing for a photo"
            fill // Fills the parent container
            className="object-cover rounded-3xl" // Ensures the image fits without stretching
          />
        </div>
        <Link
          href="/gallery"
          className="bg-primary text-black font-bold rounded-full px-4 py-4 mt-2 w-full flex items-center justify-center"
        >
          See Our Gallery
        </Link>
      </div>{" "}
      {/* testimonials */}
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl font-museo-moderno mb-6 ">
          What Our Clients Are Saying
        </h2>

        <div
          ref={testimonialsRef}
          className="flex overflow-x-auto gap-4 pb-4 no-scrollbar w-96 px-4 "
        >
          {renderTestimonials}
        </div>
      </div>
      {/* Frequently Asked Questions */}
      <div className="w-full  flex flex-col items-center  ">
        <div className="w-full h-96 relative rounded-full">
          <Video
            videoSrc="/assets/photophoria2.mp4"
            className="rounded-b-none rounded-t-xl"
          />
        </div>
        <FAQ />
      </div>
      {/* Footer  */}
      <Footer />
    </div>
  );
}
