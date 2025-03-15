import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhotoPhoria Gallery | Event Photo Booth Examples",
  description: "Browse our gallery of photo booth images from weddings, corporate events, and parties. See how PhotoPhoria can make your event memorable with premium photo booth rentals.",
  openGraph: {
    title: "PhotoPhoria Gallery | Event Photo Booth Examples",
    description: "Browse our gallery of photo booth images from weddings, corporate events, and parties. See how PhotoPhoria can make your event memorable.",
    url: "https://photophoria.com/gallery",
    siteName: "PhotoPhoria",
    images: [
      {
        url: "/img3.png",
        width: 1200,
        height: 630,
        alt: "PhotoPhoria Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoPhoria Gallery | Event Photo Booth Examples",
    description: "Browse our gallery of photo booth images from weddings, corporate events, and parties.",
    images: ["/img3.png"],
  },
  alternates: {
    canonical: "https://photophoria.com/gallery",
  },
};