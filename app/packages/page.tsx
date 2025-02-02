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
        className="bg-dark w-80 h-80 rounded-3xl text-primary flex flex-col items-center p-6"
        key={item.title}
      >
        <div className="w-full h-full ">
          <h3 className="text-3xl font-bold text-left">{item.title}</h3>
          <p className="h-fit mt-4 text-lg">{item.description}</p>
        </div>
      </div>
    );
  });

  const renderTech = technologyFeatures.map((item, index) => {
    return (
      <div
        className={`${index % 2 === 0 ? "bg-primary" : "bg-secondary"} w-80 h-80 rounded-3xl text-black flex flex-col items-center p-6`}
        key={item.title}
      >
        <div className="w-full h-full ">
          <h3 className="text-3xl font-bold text-left font-museo-moderno">
            {item.title}
          </h3>
          <p className="h-fit mt-4 text-lg">{item.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="relative  flex flex-col items-center w-screen min-h-screen">
      <div className="absolute left-1/2 -translate-x-1/2 -top-1/2 w-[500px] h-[500px] bg-primary rounded-full blur-[350px]  opacity-50 "></div>
      <div className="relative z-10 text-center mb-20">
        <h1 className="font-bold font-museo-moderno text-2xl mb-8">
          Our Packages
        </h1>
        <div className="flex flex-col items-center gap-y-8">
          {renderPackages}
        </div>
      </div>
      <div className="mb-20">
        <h2 className="font-museo-moderno text-3xl font-bold text-center ">
          Tailor Your Experience with Add-Ons
        </h2>
        <div className="flex flex-col items-center w-full mt-8 gap-y-4">
          {renderAddons}{" "}
        </div>
      </div>
      <div className="mb-10">
        <h2 className="font-museo-moderno text-3xl font-bold text-center ">
          Technology & Features
        </h2>

        <div className="flex flex-col items-center w-full mt-8 gap-y-4">
          {renderTech}
        </div>
      </div>
    </div>
  );
}
