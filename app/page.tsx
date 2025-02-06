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
import { scrollToMiddle } from "./constants";

const renderCards = packages.map((item, index: number) => {
  return (
    <div
      key={item.title}
      className="relative flex-shrink-0 flex flex-col w-[320px] bg-white rounded-3xl px-8 py-6 justify-between min-h-[400px] items-center  2xl:w-[400px]"
    >
      {/* Title with Fixed Height */}
      <div className="h-[60px] flex items-center">
        <h3 className="font-bold text-3xl font-museo-moderno text-left text-nowrap xl:text-4xl 2xl:text-5xl">
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
        className="bg-primary text-black font-bold rounded-2xl px-4 py-4 w-full flex items-center justify-center mt-auto xl:text-lg 2xl:text-xl"
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

  useEffect(() => {
    if (containerRef.current) {
      scrollToMiddle(containerRef.current);
    }
    if (testimonialsRef.current) {
      scrollToMiddle(testimonialsRef.current);
    }
    setLoading(false); // Set loading to false after scrolling
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center gap-y-6 z-0">
      {/* Hero Section */}
      <div className="w-full h-[31.25rem] rounded-xl flex flex-col-reverse relative md:h-[80vh] md:rounded-3xl shadow-lg ">
        {isLoading && (
          <Skeleton className="w-full h-full absolute z-10 rounded-xl md:rounded-3xl" />
        )}
        <Image
          src="/assets/pp-group-1.jpg"
          alt="group photo of people using the photo booth"
          className="rounded-xl object-cover w-full h-full absolute z-10 md:rounded-3xl"
          onLoad={() => setLoading(false)}
          fill
        />
        <div className="flex flex-col items-center mx-2 z-20 md:items-start">
          <div className="mb-4 text-white px-4 md:mb-8 xl:mb-12 2xl:mb-16">
            <p className="font-red-hat-display md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Introducing PhotoPhoria’s Photo Booth Rental
            </p>
            <h1 className="font-museo-moderno text-2xl/8 font-bold md:text-4xl md:w-4/5 lg:w-fit lg:text-6xl  2xl:text-8xl">
              Your Moment, Perfectly Captured
            </h1>
          </div>
          <button className="md:hidden w-full h-10 rounded-full bg-primary text-lg font-bold mb-4 xl:text-xl 2xl:text-2xl">
            Book Now
          </button>
          <div className="hidden md:block md:absolute bottom-8 right-4 xl:bottom-12 xl:right-8 2xl:bottom-16 2xl:right-12">
            <Button text="Book Now" link="contact" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full flex flex-col items-center md:flex-row-reverse md:h-[65vh] shadow-lg rounded-xl xl:h-[70vh] 2xl:h-[75vh]">
        <div className="w-full h-96 relative rounded-full md:h-full">
          <Video
            videoSrc="/assets/photophoria1.mp4"
            className="rounded-b-none rounded-t-xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-xl md:rounded-br-xl md:h-full"
          />
        </div>
        <div className="w-full relative rounded-t-none rounded-b-xl bg-primary p-4 md:rounded-none md:h-full md:rounded-tl-xl md:rounded-bl-xl md:p-6 lg:p-10 xl:p-12 2xl:p-16">
          <h2 className="font-bold text-3xl/8 font-museo-moderno mb-4 lg:text-5xl lg:mb-6 xl:text-6xl xl:mb-8 2xl:text-7xl 2xl:mb-10">
            Turning Moments Into Magic
          </h2>
          <p className="mb-2 text-lg lg:text-2xl lg:mb-6 xl:text-3xl xl:mb-8 2xl:text-4xl 2xl:mb-10">
            At PhotoPhoria, we specialize in photobooth rentals that bring
            connection, joy, and unforgettable memories to every event—weddings,
            birthdays, corporate gatherings, and more.
          </p>
          <p className="text-lg mb-2 lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Our stylish photobooths capture the laughter, love, and moments that
            make your celebration unique.
          </p>

          <Link
            href="/about"
            className="w-14 h-14 rounded-xl bg-black flex items-center justify-center md:hidden xl:w-16 xl:h-16 2xl:w-20 2xl:h-20"
          >
            <RightArrow />
          </Link>
          <div className="hidden md:block md:absolute bottom-10 left-6 xl:bottom-12 xl:left-8 2xl:bottom-16 2xl:left-12">
            <Button text="Learn More" invert={true} link="about" />
          </div>
        </div>
      </div>

      {/* Package Scroll Section */}
      <div className="w-full relative rounded-xl bg-[#EBE4E0] flex flex-col items-center py-6 xl:py-8 2xl:py-10">
        <h2 className="font-bold text-4xl font-museo-moderno mb-6 xl:text-5xl 2xl:text-6xl">
          Our Packages
        </h2>

        <div
          className="flex overflow-x-auto lg:overflow-visible gap-4 no-scrollbar w-full px-4 lg:items-center lg:justify-center"
          ref={containerRef}
        >
          {renderCards}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full gap-y-2 flex flex-col">
        <div className="w-full flex gap-x-2">
          <div className="flex-1 relative h-52 md:h-72 xl:h-96 2xl:h-[28rem]">
            <Image
              src="/assets/img1.png"
              alt="two women taking a photo"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="flex-1 relative h-52 md:h-72 xl:h-96 2xl:h-[28rem]">
            <Image
              src="/assets/img2.png"
              alt="a woman taking a photo"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </div>

        <div className="relative w-full h-52 md:h-72 xl:h-96 2xl:h-[28rem]">
          <Image
            src="/assets/img3.png"
            alt="women throwing a party"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
        <div className="relative w-full h-52 md:h-72 xl:h-96 2xl:h-[28rem]">
          <Image
            src="/assets/img4.png"
            alt="man posing for a photo"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
        <Link
          href="/gallery"
          className="bg-primary text-black font-bold rounded-full px-4 py-4 mt-4 w-full flex items-center justify-center mb-10 md:w-52 self-center xl:w-96 xl:text-2xl 2xl:text-3xl"
        >
          See Our Gallery
        </Link>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col items-center md:w-full lg:mb-10 xl:mb-12 2xl:mb-16">
        <h2 className="font-bold text-2xl font-museo-moderno mb-6 lg:text-4xl xl:text-5xl 2xl:text-6xl">
          What Our Clients Are Saying
        </h2>

        <div
          ref={testimonialsRef}
          className="flex overflow-x-auto gap-4 pb-4 no-scrollbar w-96 px-4 md:w-full xl:overflow-visible xl:justify-center"
        >
          {renderTestimonials}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full flex flex-col items-center md:flex-row md:h-[65vh] md:mb-8 xl:h-[70vh] 2xl:h-[75vh]">
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
