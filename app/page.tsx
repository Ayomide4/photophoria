"use client";
import Image from "next/image";
import Skeleton from "./components/skeleton";
import { useState } from "react";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  //TODO: add loading animation for all images for example opening twitter for the first time
  return (
    <div className="bg-background w-full h-full flex  flex-col items-center">
      <div className=" h-96  rounded-xl flex flex-col-reverse relative">
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
        <div className="flex flex-col items-center mb-4 mx-2 z-20">
          <div className="mb-4 text-white">
            <p className="font-red-hat-display text-sm text-nowrap">
              Introducing PhotoPhoria ‘s Photo Booth Rental
            </p>
            <h1 className="font-museo-moderno text-3xl font-bold">
              Your Moment, Perfectly Captured{" "}
            </h1>
          </div>
          <button className="w-full h-10 rounded-full bg-primary text-lg font-bold">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
