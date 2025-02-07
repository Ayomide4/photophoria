"use client";
import Link from "next/link";
import CoreValues from "../components/CoreValues";
import Video from "../components/Video";
import Image from "next/image";
import Button from "../components/Button";

export default function About() {
  return (
    <div className="flex flex-col items-center bg-background md:mt-20 lg:mx-5 lg:mt-28 xl:mx-10 2xl:mx-20">
      <div className="w-full flex flex-col items-center mb-[110px] md:flex-row-reverse md:h-[65vh] xl:h-[70vh] 2xl:h-[75vh]">
        {/* Video Section - 40% width on md+ */}
        <div className="w-full h-96 relative rounded-full md:h-full md:w-[40%]">
          <Video
            videoSrc="/photophoria3.mp4"
            className="rounded-[30px] md:rounded-3xl md:w-full"
          />
        </div>
        {/* About Section - 60% width on md+ */}
        <div className="w-full relative rounded-[30px] bg-secondary p-4 md:h-full md:w-[60%] md:rounded-3xl">
          <div className="flex w-fit items-center justify-between mb-2 md:hidden">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 bg-[#F6F3F1] rounded-xl flex items-center justify-center mr-2">
              <Image
                src="/pp-logo.svg"
                width={24}
                height={24}
                className="w-6 h-6"
                alt="photophoria logo"
              />
            </div>
            <h1 className="text-xl md:text-2xl">About Us</h1>
          </div>
          <div className="lg:p-10 xl:p-12 2xl:p-16">
            <h2 className="font-bold text-2xl/8 mb-4 md:text-3xl lg:text-4xl  2xl:text-8xl xl:mb-8">
              Photo Booth Rentals for Unforgettable Moments
            </h2>
            <p className="text-lg mb-2 md:mb-6 lg:text-xl xl:text-2xl 2xl:text-3xl lg:mb-6 xl:mb-8">
              At PhotoPhoria, we specialize in photobooth rentals that bring joy
              and unforgettable memories to any event—weddings, birthdays,
              corporate gatherings, and more.
            </p>
            <p className="text-lg mb-2 hidden md:block md:mb-10 lg:text-xl xl:text-2xl 2xl:text-3xl xl:mb-12">
              Our stylish booths capture the laughter and love that make your
              celebration unique. With PhotoPhoria, you&apos;re not just renting
              a photo booth—you&apos;re creating lasting experiences
            </p>{" "}
            <div className="hidden md:block w-44 lg:w-52 ">
              <Button text="Book Now" invert={true} link="contact" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-72 text-center mb-12 md:w-4/5 md:mb-[110px] xl:w-3/4 2xl:w-2/3">
        <h2 className="font-museo-moderno text-xl text-center mb-8 md:text-2xl xl:text-3xl 2xl:text-4xl">
          Our Mission
        </h2>
        <p className="text-3xl xl:text-4xl 2xl:text-5xl">
          To create lasting memories by capturing authentic moments of
          connection through exceptional photo booth rentals and professional
          event photography.
        </p>
      </div>
      <div className="w-full h-96 relative rounded-full mb-20 lg:h-[700px] xl:h-[800px] 2xl:h-[900px]">
        <Video
          videoSrc="/photophoria2.3.mp4"
          className="rounded-[30px]"
        />
      </div>
      <div className="w-full mb-20 lg:w-4/5 xl:w-3/4 2xl:w-2/3">
        <h2 className="font-museo-moderno text-xl text-center mb-8 md:text-2xl xl:text-3xl 2xl:text-4xl">
          Our Core Values
        </h2>
        <CoreValues />
      </div>
      <div className="w-full h-96 relative rounded-full mb-10 lg:h-[700px] xl:h-[800px] 2xl:h-[900px]">
        <Video
          videoSrc="/photophoria2.1.mp4"
          className="rounded-[30px]"
        />
      </div>
      <Link
        href="/contact"
        className="bg-primary text-black text-xl font-bold rounded-full px-4 py-4 mt-2 w-full flex items-center justify-center h-12 mb-10 md:w-52 lg:w-72 xl:w-80 2xl:w-96 xl:text-3xl 2xl:text-3xl xl:h-14 2xl:h-16"
      >
        Book Now
      </Link>
    </div>
  );
}
