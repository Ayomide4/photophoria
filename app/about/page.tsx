"use client";
import Link from "next/link";
import CoreValues from "../components/CoreValues";
import Video from "../components/Video";
import Image from "next/image";
import Button from "../components/Button";

export default function About() {
  return (
    <div className="flex flex-col items-center bg-background md:mt-20 ">
      <h1 className="font-museo-moderno font-bold text-3xl md:text-5xl md:mb-8">
        About Us
      </h1>
      <div className="w-full flex flex-col items-center mb-[110px] md:flex-row-reverse md:h-[65vh]">
        {/* Video Section - 40% width on md+ */}
        <div className="w-full h-96 relative rounded-full md:h-full md:w-[40%]">
          <Video
            videoSrc="/assets/photophoria3.mp4"
            className="rounded-[30px] md:rounded-3xl md:w-full"
          />
        </div>

        {/* About Section - 60% width on md+ */}
        <div className="w-full relative rounded-[30px] bg-secondary p-4 md:h-full md:w-[60%] md:rounded-3xl md:p-8">
          <div className="flex w-fit items-center justify-between mb-2 md:hidden">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 bg-[#F6F3F1] rounded-xl flex items-center justify-center mr-2 ">
              <Image
                src="/assets/pp-logo.svg"
                width={24} // Default for mobile
                height={24}
                className="w-6 h-6 "
                alt="photophoria logo"
              />
            </div>
            <h1 className="text-xl md:text-2xl ">About Us</h1>
          </div>
          <h2 className="font-bold text-2xl/8 mb-4 md:text-3xl">
            Photo booth rentals for unforgettable moments
          </h2>
          <p className="text-lg mb-2 md:mb-6">
            At PhotoPhoria, we specialize in photobooth rentals that bring joy
            and unforgettable memories to any event—weddings, birthdays,
            corporate gatherings, and more.
          </p>
          <p className="text-lg mb-2 hidden md:block md:mb-10">
            Our stylish booths capture the laughter and love that make your
            celebration unique. With PhotoPhoria, you’re not just renting a
            photo booth—you’re creating lasting experiences
          </p>
          <div className="hidden md:block w-44">
            <Button text="Book Now" invert={true} link="contact" />
          </div>
        </div>
      </div>
      <div className=" w-72 text-center mb-12 md:w-4/5 md:mb-[110px]">
        <h2 className="font-museo-moderno text-xl text-center mb-8 md:text-2xl">
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
        <h2 className="font-museo-moderno text-xl text-center mb-8 md:text-2xl">
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
        className="bg-primary text-black text-xl font-bold rounded-full px-4 py-4 mt-2 w-full flex items-center justify-center h-12 mb-10 md:w-52"
      >
        Book Now
      </Link>{" "}
    </div>
  );
}
