"use client";

import { AnimatePresence, motion } from "framer-motion";
import { RightArrow } from "@/public/svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="w-full mb-4 z-40 md:absolute md:p-4">
      {/* Top Navbar */}
      <ul className="flex justify-between items-center w-full relative z-40">
        <Link href="/">
          <li className="cursor-pointer">
            <Image
              src="/logo1.png"
              alt="logo"
              width={75}
              height={33}
              className="w-[75px] h-[33px] md:w-[100px] md:h-[44px] lg:w-[120px] lg:h-[53px]"
            />
          </li>
        </Link>
        <li
          className="cursor-pointer relative overflow-hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <motion.p
            key={isOpen ? "Close" : "Menu"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-lg font-semibold transition-transform duration-300 md:text-xl lg:text-2xl "
          >
            {isOpen ? "Close" : "Menu"}
          </motion.p>
        </li>
      </ul>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#EB8C6C] p-10 z-30 flex flex-col justify-evenly font-red-hat-display"
          >
            {/* Menu List */}
            <ul className="flex flex-col space-y-6 text-black text-4xl font-semibold mt-10 ml-10 w-fit">
              {[
                { name: "HOME", href: "/" },
                { name: "ABOUT", href: "/about" },
                { name: "PACKAGES", href: "/packages" },
                { name: "GALLERY", href: "/gallery" },
                { name: "CONTACT", href: "/contact" },
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative group w-fit"
                >
                  <Link
                    href={item.href}
                    className="block py-2 relative overflow-hidden"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    {/* Underline Animation */}
                    <motion.div className="absolute left-0 bottom-0 h-[2px] bg-black w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Footer Section */}
            <div className="flex flex-col justify-start w-fit">
              <Link
                href="https://www.instagram.com/photophoria.co/"
                className="flex items-center"
              >
                <p className="mr-2">INSTAGRAM</p>
                <div className="-rotate-45 flex justify-center items-center">
                  <RightArrow width={15} height={15} fill="#000000" />
                </div>
              </Link>

              <div>
                <a href="mailto:info@photophoria.co">INFO@PHOTOPHORIA.CO</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
