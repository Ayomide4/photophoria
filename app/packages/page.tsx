"use client";
import PackageOverview from "../components/PackageOverview";
import { fullPackages, addons, technologyFeatures } from "../constants";

export default function Package() {
  const renderPackages = fullPackages.map((item, index) => {
    return (
      <PackageOverview
        key={item.title}
        title={item.title}
        features={item.features}
        bgColor={`${index === 1 ? "bg-primary" : ""}`}
        buttonText="Book Now"
        buttonColor={`${index === 1 ? "bg-black" : ""}`}
      />
    );
  });

  const renderAddons = addons.map((item) => {
    return (
      <div
        className="bg-dark w-full max-w-[320px] h-80 rounded-3xl text-primary 
      flex flex-col items-center p-6 md:max-w-[280px] md:h-64 lg:max-w-[300px] lg:h-auto"
        key={item.title}
      >
        <div className="w-full h-full">
          <h3 className="text-3xl font-bold text-left md:text-xl lg:text-2xl">
            {item.title}
          </h3>
          <p className="mt-4 text-lg md:text-base lg:text-lg">
            {item.description}
          </p>
        </div>
      </div>
    );
  });

  const renderTech = technologyFeatures.map((item, index) => {
    return (
      <div
        className={`${index % 2 === 0 ? "bg-primary" : "bg-secondary"} 
      w-full max-w-[320px] h-80 md:max-w-[280px] md:h-64 lg:max-w-[300px] lg:h-[280px] 
      rounded-3xl text-black flex flex-col items-center p-6 md:p-4`}
        key={item.title}
      >
        <div className="w-full h-full">
          <h3 className="text-3xl font-bold text-left font-museo-moderno md:text-xl lg:text-2xl">
            {item.title}
          </h3>
          <p className="mt-4 text-lg md:text-base lg:text-lg">
            {item.description}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="relative flex flex-col items-center w-screen min-h-screen md:mt-20">
      {/* Background Blur */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-1/2 w-[500px] h-[500px] bg-primary rounded-full blur-[350px] opacity-50"></div>
      {/* Packages Section */}
      <div className="relative z-10 text-center mb-20">
        <h1 className="font-bold font-museo-moderno text-2xl mb-8 md:text-5xl md:mb-8 lg:text-6xl">
          Our Packages
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {renderPackages}
        </div>
      </div>
      {/* Add-ons Section */}
      <div className="mb-20 flex flex-col items-center">
        <h2 className="font-museo-moderno text-3xl font-bold text-center lg:text-4xl mb-4 lg:mb-8 ">
          Tailor Your Experience with Add-Ons
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {renderAddons}
        </div>
      </div>
      {/* Technology & Features Section */}
      <div className="mb-10">
        <h2 className="font-museo-moderno text-3xl font-bold text-center lg:text-4xl mb-4 lg:mb-8">
          Technology & Features
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {renderTech}
        </div>
      </div>{" "}
    </div>
  );
}
