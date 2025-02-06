import { RightArrow } from "@/public/assets/svg";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-dark text-primary rounded-xl p-4 mb-4 md:relative lg:p-6 xl:p-8 2xl:p-10">
      {/* Top section */}
      <div className="mb-10 md:flex md:justify-between md:items-start md:gap-x-8 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20">
        {/* SITE Links */}
        <div className="flex flex-col mb-8 md:w-auto">
          <h3 className="text-xs mb-2 lg:text-sm xl:text-base 2xl:text-lg">
            SITE
          </h3>
          <div className="flex justify-between gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
            <div className="flex flex-col">
              <Link href="/" className="lg:text-lg xl:text-xl 2xl:text-2xl">
                HOME
              </Link>
              <Link
                href="/about"
                className="lg:text-lg xl:text-xl 2xl:text-2xl"
              >
                ABOUT
              </Link>
            </div>
            <div className="flex flex-col">
              <Link
                href="/packages"
                className="lg:text-lg xl:text-xl 2xl:text-2xl"
              >
                PACKAGES
              </Link>
              <Link
                href="/gallery"
                className="lg:text-lg xl:text-xl 2xl:text-2xl"
              >
                GALLERY
              </Link>
            </div>
            <Link
              href="/contact"
              className="lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              CONTACT
            </Link>
          </div>
        </div>

        {/* GET IN TOUCH */}
        <div className="flex flex-col mb-8">
          <h3 className="text-xs mb-2 lg:text-sm xl:text-base 2xl:text-lg">
            GET IN TOUCH
          </h3>
          <div className="flex justify-start gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
            <a
              href="mailto:info@photophoria.co"
              className="lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              INFO@PHOTOPHORIA.CO
            </a>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-col mb-8">
          <h3 className="text-xs mb-2 lg:text-sm xl:text-base 2xl:text-lg">
            SOCIAL
          </h3>
          <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
            <div className="flex items-center">
              <a
                href="https://www.instagram.com/photophoria.co/"
                className="mr-2 lg:text-lg xl:text-xl 2xl:text-2xl"
              >
                INSTAGRAM
              </a>
              <div className="-rotate-45 flex justify-center items-center">
                <RightArrow
                  width={15}
                  height={15}
                  className="lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7"
                />
              </div>
            </div>

            <div className="flex items-center">
              <p className="mr-2 lg:text-lg xl:text-xl 2xl:text-2xl">
                FACEBOOK
              </p>
              <div className="-rotate-45 flex justify-center items-center">
                <RightArrow
                  width={15}
                  height={15}
                  className="lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col text-sm mb-8 lg:text-base xl:text-lg 2xl:text-xl">
        <p className="mb-1">Designed and Created by Lone Star Web Studio</p>
        <p>Contact: info@lonestarwebstudio.com</p>
      </div>

      {/* Mobile Review Button */}
      <Link
        href="mailto:info@photophoria.co"
        className="bg-primary text-black text-xl font-bold rounded-full px-4 py-4 mt-2 w-full flex items-center justify-center mb-6 md:absolute md:bottom-10 md:right-4 md:-translate-y-1/2 md:w-52 lg:text-2xl xl:text-3xl 2xl:text-4xl"
      >
        Leave a Review
      </Link>

      {/* Copyright */}
      <div>
        <div className="flex justify-between items-center my-2">
          <p className="text-xs lg:text-sm xl:text-base 2xl:text-lg">
            ALL RIGHTS RESERVED
          </p>
          <p className="text-xs lg:text-sm xl:text-base 2xl:text-lg">
            © {currentYear} PHOTOPHORIA
          </p>
        </div>
      </div>
    </div>
  );
}
