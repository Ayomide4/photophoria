import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhotoPhoria Packages | Premium Photo Booth Rental Options",
  description: "Explore our photo booth rental packages for weddings, corporate events, and parties. Choose from various options with custom props, unlimited prints, and digital sharing.",
  openGraph: {
    title: "PhotoPhoria Packages | Premium Photo Booth Rental Options",
    description: "Explore our photo booth rental packages for weddings, corporate events, and parties. Choose from various options with custom props, unlimited prints, and digital sharing.",
    url: "https://photophoria.com/packages",
    siteName: "PhotoPhoria",
    images: [
      {
        url: "/img1.png",
        width: 1200,
        height: 630,
        alt: "PhotoPhoria Packages",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoPhoria Packages | Premium Photo Booth Rental Options",
    description: "Explore our photo booth rental packages for weddings, corporate events, and parties.",
    images: ["/img1.png"],
  },
  alternates: {
    canonical: "https://photophoria.com/packages",
  },
};