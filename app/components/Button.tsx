import { RightArrow } from "@/public/assets/svg";
import Link from "next/link";

export default function Button({
  text,
  invert,
}: {
  text: string;
  invert?: boolean;
}) {
  return (
    <Link
      href="/contact"
      className={`rounded-full ${invert ? "bg-black" : "bg-primary"} flex items-center p-1 justify-between group cursor-pointer lg:p-1`}
    >
      {/* Arrow container */}
      <div
        className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full ${invert ? "bg-primary" : "bg-black"} flex items-center justify-center mr-2 transform transition-transform duration-500 -rotate-45 group-hover:rotate-0 `}
      >
        <RightArrow fill={invert ? "#000000" : ""} />
      </div>
      {/* Text */}
      <p
        className={`${invert ? "text-primary" : "text-black"} md:text-lg mr-4 font-semibold lg:text-xl`}
      >
        {text}
      </p>
    </Link>
  );
}
