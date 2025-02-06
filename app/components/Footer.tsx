import { RightArrow } from "@/public/assets/svg";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-dark text-primary rounded-xl p-4 mb-4 md:relative">
      {/* Top section */}
      <div className="mb-10 md:flex md:justify-between md:items-start md:gap-x-8">
        {/* SITE Links */}
        <div className="flex flex-col mb-8  md:w-auto">
          <h3 className="text-xs mb-2">SITE</h3>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col">
              <Link href="/">HOME</Link>
              <Link href="/about">ABOUT</Link>
            </div>
            <div className="flex flex-col">
              <Link href="/packages">PACKAGES</Link>
              <Link href="/gallery">GALLERY</Link>
            </div>
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
        {/* GET IN TOUCH */}
        <div className="flex flex-col mb-8">
          <h3 className="text-xs mb-2">GET IN TOUCH</h3>
          <div className="flex justify-start gap-4">
            <a href="mailto:info@photophoria.co">INFO@PHOTOPHORIA.CO</a>
          </div>
        </div>
        {/* SOCIAL */}
        <div className="flex flex-col mb-8">
          <h3 className="text-xs mb-2">SOCIAL</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <a
                href="https://www.instagram.com/photophoria.co/"
                className="mr-2"
              >
                INSTAGRAM
              </a>
              <div className="-rotate-45 flex justify-center items-center">
                <RightArrow width={15} height={15} />
              </div>
            </div>

            <div className="flex items-center">
              <p className="mr-2">FACEBOOK</p>
              <div className="-rotate-45 flex justify-center items-center">
                <RightArrow width={15} height={15} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col text-sm mb-8">
        <p className="mb-1">Designed and Created by Lone Star Web Studio</p>
        <p>Contact: info@lonestarwebstudio.com</p>
      </div>

      {/* Mobile Review Button */}
      <Link
        href="mailto:info@photophoria.co"
        className="bg-primary text-black text-xl font-bold rounded-full px-4 py-4 mt-2 w-full flex items-center justify-center mb-6 md:absolute md:bottom-10 md:right-4 md:-translate-y-1/2 md:w-52"
      >
        Leave a Review
      </Link>

      {/* Copyright */}
      <div>
        <div className="flex justify-between items-center my-2">
          <p className="text-xs">ALL RIGHTS RESERVED</p>
          <p className="text-xs">© {currentYear} PHOTOPHORIA</p>
        </div>
      </div>
      {/* <div className="hidden md:block md:absolute md:bottom-10 md:right-4 md:-translate-y-1/2 md:w-52"> */}
      {/*   {/* Review Button (hidden on mobile) */}
      {/*   <Button text="Leave a Review" link="mailto:info@photophoria.co" /> */}
      {/* </div> */}
    </div>
  );
}
