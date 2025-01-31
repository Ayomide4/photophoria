"use client";
import Image from "next/image";
import Skeleton from "./components/Skeleton";
import { useEffect, useRef, useState } from "react";
import Video from "./components/Video";
import { RightArrow } from "@/public/assets/svg";
import Link from "next/link";
import PackageOverview from "./components/PackageOverview";

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

const mapPackages = packages.map((item) => (
  <PackageOverview
    key={item.title}
    title={item.title}
    features={item.features}
  />
));

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (containerRef.current && containerRef.current.children.length >= 2) {
      const container = containerRef.current;
      const secondPackage = container.children[1] as HTMLElement;

      // Calculate the center position
      const scrollPosition =
        secondPackage.offsetLeft -
        container.offsetWidth / 2 +
        secondPackage.offsetWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "auto", // or 'smooth' for animation
      });
    }
  }, []);
  //TODO: add loading animation for all images for example opening twitter for the first time
  return (
    <div className=" w-full h-full flex  flex-col items-center gap-y-4">
      <div className="w-full h-[31.25rem]  rounded-xl flex flex-col-reverse relative ">
        {isLoading && (
          <Skeleton className="w-full h-full absolute z-10 rounded-xl" />
        )}
        <Image
          src="/assets/pp-group-1.jpg"
          alt="group photo of people using the photo booth"
          className="rounded-xl object-cover w-full h-full absolute z-10"
          width={500}
          height={500}
          onLoadingComplete={() => setLoading(false)}
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

      <div className="w-full  relative rounded-xl bg-[#EBE4E0] flex flex-col items-center py-6 mb-10">
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
    </div>
  );
}
