import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhotoPhoria | Premium Photo Booth Rentals for Weddings & Events",
  description: "PhotoPhoria offers premium photo booth rentals for weddings, corporate events, birthdays, and parties. Capture unforgettable moments with high-quality photos and a fun experience.",
  keywords: ["photo booth rental", "wedding photo booth", "event photography", "corporate event photo booth", "birthday photo booth", "party photo booth"],
  openGraph: {
    title: "PhotoPhoria | Premium Photo Booth Rentals for Weddings & Events",
    description: "Capture unforgettable moments with our stylish photo booths and professional service. Perfect for weddings, corporate events, and birthdays.",
    url: "https://photophoria.com",
    siteName: "PhotoPhoria",
    images: [
      {
        url: "/pp-group-1.jpg",
        width: 1200,
        height: 630,
        alt: "PhotoPhoria Photo Booth Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoPhoria | Premium Photo Booth Rentals for Weddings & Events",
    description: "Capture unforgettable moments with our stylish photo booths and professional service.",
    images: ["/pp-group-1.jpg"],
  },
  alternates: {
    canonical: "https://photophoria.com",
  },
};