import type { Metadata } from "next";
import { MuseoModerno, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

// Load MuseoModerno for headers
const museoModerno = MuseoModerno({
  subsets: ["latin"],
  variable: "--font-museo-moderno", // Define a CSS variable
  weight: ["400", "500", "700"], // Adjust weights as needed
});

// Load Red Hat Display for paragraphs
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display", // Define a CSS variable
  weight: ["400", "500", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "PhotoPhoria",
  description: "PhotoPhoria - Your one-stop shop for event photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${museoModerno.variable} ${redHatDisplay.variable}`}
    >
      <body className="antialiased flex flex-col items-center bg-background">
        <div className="w-[calc(100%-30px)] mt-4 flex flex-col items-center md:relative">
          <Navbar />
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
