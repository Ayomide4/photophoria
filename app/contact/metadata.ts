import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PhotoPhoria | Book Your Photo Booth Rental",
  description: "Contact PhotoPhoria to book a premium photo booth for your wedding, corporate event, or party. Get in touch for pricing, availability, and custom packages.",
  openGraph: {
    title: "Contact PhotoPhoria | Book Your Photo Booth Rental",
    description: "Contact PhotoPhoria to book a premium photo booth for your wedding, corporate event, or party. Get in touch for pricing, availability, and custom packages.",
    url: "https://photophoria.com/contact",
    siteName: "PhotoPhoria",
    images: [
      {
        url: "/img2.png",
        width: 1200,
        height: 630,
        alt: "Contact PhotoPhoria",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PhotoPhoria | Book Your Photo Booth Rental",
    description: "Contact PhotoPhoria to book a premium photo booth for your wedding, corporate event, or party.",
    images: ["/img2.png"],
  },
  alternates: {
    canonical: "https://photophoria.com/contact",
  },
};