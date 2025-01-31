import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full mb-4">
      <ul className="flex justify-between items-center w-full ">
        <Link href="/">
          <li className="cursor-pointer">
            <Image src="/assets/logo1.png" alt="logo" width={75} height={33} />
          </li>
        </Link>
        <li className="cursor-pointer">
          <p className="text-lg font-semibold">Menu</p>
        </li>
      </ul>
    </nav>
  );
}
