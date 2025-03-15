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
  title: "PhotoPhoria | Premium Photo Booth Rentals for Events",
  description: "PhotoPhoria offers premium photo booth rentals for weddings, corporate events, birthdays, and more. Capture unforgettable moments with our stylish photo booths and professional service.",
  keywords: ["photo booth rental", "event photography", "wedding photo booth", "corporate event photo booth", "birthday photo booth", "photo booth service"],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "PhotoPhoria | Premium Photo Booth Rentals for Events",
    description: "Capture unforgettable moments with our stylish photo booths and professional service. Perfect for weddings, corporate events, and birthdays.",
    url: "https://photophoria.com",
    siteName: "PhotoPhoria",
    images: [
      {
        url: "/pp-group-1.jpg",
        width: 1200,
        height: 630,
        alt: "PhotoPhoria Event Photo Booth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoPhoria | Premium Photo Booth Rentals for Events",
    description: "Capture unforgettable moments with our stylish photo booths and professional service.",
    creator: "@photophoria",
    images: ["/pp-group-1.jpg"],
  },
  verification: {
    google: "verification_token",
  },
  alternates: {
    canonical: "https://photophoria.com",
  },
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
      <head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PhotoPhoria",
              "description": "Premium photo booth rental service for weddings, corporate events, birthdays, and parties",
              "image": "https://photophoria.com/pp-group-1.jpg",
              "priceRange": "$$-$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Photo Lane",
                "addressLocality": "Photography City",
                "addressRegion": "PC",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.7128",
                "longitude": "-74.0060"
              },
              "telephone": "+1-555-123-4567",
              "email": "info@photophoria.com",
              "url": "https://photophoria.com",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/photophoria",
                "https://www.instagram.com/photophoria",
                "https://twitter.com/photophoria"
              ]
            })
          }}
        />
      </head>
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
