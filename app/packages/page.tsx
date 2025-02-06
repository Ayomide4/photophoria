"use client";
import { useEffect, useRef, useState } from "react";
import PackageOverview from "../components/PackageOverview";
import {
  fullPackages,
  addons,
  technologyFeatures,
  scrollToMiddle,
} from "../constants";

export default function Package() {
  const packageRef = useRef<HTMLDivElement>(null);
  const addonsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (packageRef.current) {
      scrollToMiddle(packageRef.current);
    }
    if (addonsRef.current) {
      scrollToMiddle(addonsRef.current);
    }

    if (techRef.current) {
      scrollToMiddle(techRef.current);
    }
    setLoading(false); // Set loading to false after scrolling
  }, []);

  const renderPackages = fullPackages.map((item, index) => (
    <PackageOverview
      key={item.title}
      title={item.title}
      features={item.features}
      bgColor={index === 1 ? "bg-primary" : ""}
      buttonText="Book Now"
      buttonColor={index === 1 ? "bg-black" : ""}
    />
  ));

  const renderAddons = addons.map((item) => (
    <div
      className="bg-dark flex-shrink-0 w-[320px] h-80 rounded-3xl text-primary flex flex-col items-center p-6"
      key={item.title}
    >
      <h3 className="text-3xl font-bold text-left">{item.title}</h3>
      <p className="mt-4 text-lg">{item.description}</p>
    </div>
  ));

  const renderTech = technologyFeatures.map((item, index) => (
    <div
      className={`${index % 2 === 0 ? "bg-primary" : "bg-secondary"} 
      flex-shrink-0 w-[320px] h-80 rounded-3xl text-black flex flex-col items-center p-6`}
      key={item.title}
    >
      <h3 className="text-3xl font-bold text-left">{item.title}</h3>
      <p className="mt-4 text-lg">{item.description}</p>
    </div>
  ));

  return (
    <div className="relative flex flex-col items-center w-screen min-h-screen md:mt-20">
      {/* Background Blur */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-1/2 w-[500px] h-[500px] bg-primary rounded-full blur-[350px] opacity-50"></div>

      {/* Packages Section */}
      <div className="relative z-10 text-center mb-20 w-full">
        <h1 className="font-bold font-museo-moderno text-2xl mb-8 md:text-5xl lg:text-6xl">
          Our Packages
        </h1>
        <div className="w-full flex justify-center">
          <div
            ref={packageRef}
            className="flex gap-6 overflow-x-auto md:flex md:overflow-x-scroll md:snap-x md:snap-mandatory 
            md:scroll-pl-24 md:px-4 lg:grid lg:grid-cols-3 lg:gap-8 "
          >
            {renderPackages}
          </div>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="mb-20 w-full">
        <h2 className="font-museo-moderno text-3xl font-bold text-center lg:text-4xl mb-4 lg:mb-8">
          Tailor Your Experience with Add-Ons
        </h2>
        <div className="w-full flex justify-center">
          <div
            ref={addonsRef}
            className="flex gap-6 overflow-x-auto md:flex md:overflow-x-scroll md:snap-x md:snap-mandatory 
            md:scroll-pl-24 md:px-4 lg:grid lg:grid-cols-3 lg:gap-8"
          >
            {renderAddons}
          </div>
        </div>
      </div>

      {/* Technology & Features Section */}
      <div className="mb-10 w-full">
        <h2 className="font-museo-moderno text-3xl font-bold text-center lg:text-4xl mb-4 lg:mb-8">
          Technology & Features
        </h2>
        <div className="w-full flex justify-center">
          <div
            ref={techRef}
            className="flex gap-4 overflow-x-auto md:flex md:overflow-x-scroll md:snap-x md:snap-mandatory 
            md:scroll-pl-24 md:px-4 lg:grid lg:grid-cols-3 xl:gap-8"
          >
            {renderTech}
          </div>
        </div>
      </div>
    </div>
  );
}
