import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PhotoPhoria | Our Story & Premium Photo Booth Services",
  description: "Learn about PhotoPhoria's premium photo booth rental services. We specialize in creating unforgettable experiences for weddings, corporate events, and parties.",
  openGraph: {
    title: "About PhotoPhoria | Our Story & Premium Photo Booth Services",
    description: "Learn about PhotoPhoria's premium photo booth rental services. We specialize in creating unforgettable experiences for weddings, corporate events, and parties.",
    url: "https://photophoria.com/about",
    siteName: "PhotoPhoria",
    images: [
      {
        url: "/pp-group-1.jpg",
        width: 1200,
        height: 630,
        alt: "About PhotoPhoria",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About PhotoPhoria | Our Story & Premium Photo Booth Services",
    description: "Learn about PhotoPhoria's premium photo booth rental services.",
    images: ["/pp-group-1.jpg"],
  },
  alternates: {
    canonical: "https://photophoria.com/about",
  },
};