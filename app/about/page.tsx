"use client";
import Link from "next/link";
import CoreValues from "../components/CoreValues";
import Video from "../components/Video";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center bg-background">
      <div className="w-full  flex flex-col items-center mb-[110px]">
        <div className="w-full h-96 relative rounded-full">
          <Video
            videoSrc="/assets/photophoria3.mp4"
            className=" rounded-[30px]"
          />
        </div>
        <div className="w-full  relative rounded-[30px] bg-secondary p-4">
          <div className="flex w-fit  items-center justify-between mb-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#F6F3F1] rounded-xl flex items-center justify-center mr-2">
              <Image
                src="/assets/pp-logo.svg"
                width={24} // Default for mobile
                height={24}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                alt="photophoria logo"
              />
            </div>
            <h1 className="text-xl">About Us</h1>
          </div>
          <h2 className="font-bold text-2xl/8 mb-4 ">
            Photo booth rentals for unforgettable moments
          </h2>
          <p className="text-lg mb-2">
            At PhotoPhoria, we specialize in photobooth rentals that bring joy
            and unforgettable memories to any event—weddings, birthdays,
            corporate gatherings, and more.{" "}
          </p>
        </div>
      </div>
      <div className=" w-72 text-center mb-12">
        <h2 className="font-museo-moderno text-xl text-center mb-8">
          Our Mission
        </h2>
        <p className="text-3xl">
          To create lasting memories by capturing authentic moments of
          connection through exceptional photo booth rentals and professional
          event photography.
        </p>
      </div>
      <div className="w-full h-96 relative rounded-full mb-20">
        <Video
          videoSrc="/assets/photophoria2.3.mp4"
          className=" rounded-[30px]"
        />
      </div>
      <div className="w-full mb-20">
        <h2 className="font-museo-moderno text-xl text-center mb-8">
          Our Core Values
        </h2>
        <CoreValues />
      </div>
      <div className="w-full h-96 relative rounded-full mb-10">
        <Video
          videoSrc="/assets/photophoria2.1.mp4"
          className=" rounded-[30px]"
        />
      </div>
      <Link
        href="/contact"
        className="bg-primary text-black text-xl font-bold rounded-full px-4 py-4 mt-2 w-full flex items-center justify-center h-12 mb-10"
      >
        Book Now
      </Link>{" "}
    </div>
  );
}
