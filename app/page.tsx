"use client";
import Image from "next/image";
import Skeleton from "./components/Skeleton";
import { useEffect, useRef, useState } from "react";
import Video from "./components/Video";
import { RightArrow } from "@/public/assets/svg";
import Link from "next/link";
import TestimonialCard from "./components/TestimonialCard";
import FAQ from "./components/FAQ";
import { packages, testimonialsPeople } from "./constants";
import FeatureList from "./components/FeatureList";
import Button from "./components/Button";

const renderCards = packages.map((item, index: number) => {
  return (
    <div
      key={item.title}
      className="relative flex-shrink-0 flex flex-col w-[320px] bg-white rounded-3xl px-8 py-6 justify-between min-h-[400px]" // Set consistent height
    >
      {/* Title with Fixed Height */}
      <div className="h-[60px] flex items-center">
        <h3 className="font-bold text-3xl font-museo-moderno text-left text-nowrap">
          {item.title}
        </h3>
      </div>

      {/* Feature List - Takes Up Remaining Space */}
      <div className="flex-grow flex flex-col">
        <ul className="flex-grow mb-8">
          <FeatureList packageIndex={index} />
        </ul>
      </div>

      {/* Button */}
      <Link
        href="/packages"
        scroll={true}
        className="bg-primary text-black font-bold rounded-2xl px-4 py-4 w-full flex items-center justify-center mt-auto"
      >
        VIEW PACKAGES
      </Link>
    </div>
  );
});

const renderTestimonials = testimonialsPeople.map((item, index) => (
  <TestimonialCard
    key={index}
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
  }, []);

  //TODO:
  // - add loading animation for all images for example opening twitter for the first time
  // - add mute/unmute button for video
  // - animations
  // - make consts file

  return (
    <div className=" w-full h-full flex  flex-col items-center gap-y-6 z-0">
      <div className="w-full h-[31.25rem]  rounded-xl flex flex-col-reverse relative md:h-[80vh] md:rounded-3xl ">
        {isLoading && (
          <Skeleton className="w-full h-full absolute z-10 rounded-xl md:rounded-3xl" />
        )}
        <Image
          src="/assets/pp-group-1.jpg"
          alt="group photo of people using the photo booth"
          className="rounded-xl object-cover w-full h-full absolute z-10 md:rounded-3xl "
          onLoad={() => setLoading(false)}
          fill
        />
        <div className="flex flex-col items-center  mx-2 z-20 md:items-start">
          <div className="mb-4 text-white px-4 md:mb-8">
            <p className=" font-red-hat-display text-nowrap md:text-lg lg:text-2xl">
              Introducing PhotoPhoria ‘s Photo Booth Rental
            </p>
            <h1 className="font-museo-moderno text-3xl/8 font-bold md:text-4xl md:w-4/5 lg:w-fit lg:text-6xl">
              Your Moment, Perfectly Captured{" "}
            </h1>
          </div>
          <button className="md:hidden w-full h-10 rounded-full bg-primary text-lg font-bold mb-4">
            Book Now
          </button>
          <div className="hidden md:block md:absolute bottom-8 right-4">
            <Button text="Book Now" link="contact" />
          </div>
        </div>
      </div>
      {/* about */}
      <div className="w-full  flex flex-col items-center md:flex-row-reverse md:h-[65vh]">
        <div className="w-full h-96 relative rounded-full md:h-full">
          <Video
            videoSrc="/assets/photophoria1.mp4"
            className="rounded-b-none rounded-t-xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-xl md:rounded-br-xl md:h-full"
          />
        </div>
        <div className="w-full  relative rounded-t-none rounded-b-xl bg-primary p-4  md:rounded-none md:h-full md:rounded-tl-xl md:rounded-bl-xl md:p-6">
          <h2 className="font-bold text-3xl/8 font-museo-moderno mb-4 ">
            Turning Moments Into Magic
          </h2>
          <p className="mb-2 text-lg ">
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
            className="w-14 h-14 rounded-xl bg-black flex items-center justify-center md:hidden"
          >
            <RightArrow />
          </Link>
          <div className="hidden md:block md:absolute bottom-10 left-6">
            <Button text="Learn More" invert={true} link="about" />
          </div>
        </div>
      </div>
      {/* Package scroll */}
      <div className="w-full  relative rounded-xl bg-[#EBE4E0] flex flex-col items-center py-6 ">
        <h2 className="font-bold text-4xl font-museo-moderno mb-6 ">
          Our Packages
        </h2>

        {/* FIXME: TURN THIS INTO IT SEPERATE DIV */}
        <div
          className="flex overflow-x-auto gap-4  no-scrollbar w-full px-4 "
          ref={containerRef}
        >
          {renderCards}{" "}
        </div>
      </div>
      {/* gallery */}
      <div className="w-full  gap-y-2 flex flex-col ">
        {/* Flex container for the first two images */}
        <div className="w-full flex gap-x-2 ">
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
          className="bg-primary text-black font-bold rounded-full px-4 py-4 mt-4 w-full flex items-center justify-center mb-10 md:w-52 self-center"
        >
          See Our Gallery
        </Link>
      </div>{" "}
      {/* testimonials */}
      <div className="flex flex-col items-center md:w-full ">
        <h2 className="font-bold text-2xl font-museo-moderno mb-6 ">
          What Our Clients Are Saying
        </h2>

        <div
          ref={testimonialsRef}
          className="flex overflow-x-auto gap-4 pb-4 no-scrollbar w-96 px-4 md:w-full"
        >
          {renderTestimonials}
        </div>
      </div>
      {/* Frequently Asked Questions */}
      <div className="w-full  flex flex-col items-center md:flex-row md:h-[65vh]  md:mb-8">
        <div className="w-full h-96 relative rounded-full md:h-full">
          <Video
            videoSrc="/assets/photophoria2.mp4"
            className="rounded-b-none rounded-t-xl md:rounded-tr-none md:rounded-br-none md:rounded-tl-xl md:rounded-bl-xl md:h-full"
          />
        </div>
        <FAQ />
      </div>
    </div>
  );
}
