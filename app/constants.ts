// Define the Feature interface
interface Feature {
  included: boolean;
  description: string;
}

// Define the Package interface
interface Package {
  title: string;
  features: Feature[]; // features is an array of Feature objects
}

export const packages: Package[] = [
  {
    title: "Standard",
    features: [
      { included: true, description: "4 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      { included: true, description: "Unlimited Digital Pictures & Gifs" },
      { included: false, description: "Booth Attendant" },
      {
        included: false,
        description: "4x6 prints with Custom print overlay templates",
      },
      { included: false, description: "Photo Album" },
    ],
  },
  {
    title: "Essential",
    features: [
      { included: true, description: "5 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      {
        included: true,
        description: " Unlimited Digital pictures, videos, boomerangs & GIFs",
      },
      {
        included: true,
        description: "Virtual booth link",
      },
      {
        included: true,
        description: "4x6 prints with Custom print overlay templates",
      },
      {
        included: true,
        description: " Standard backdrop",
      },
      { included: false, description: "Photo Album" },
    ],
  },
  {
    title: "Premium",
    features: [
      { included: true, description: "6 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      {
        included: true,
        description: " Unlimited Digital pictures, videos, boomerangs & GIFs",
      },
      {
        included: true,
        description: "Virtual booth link",
      },
      {
        included: true,
        description: "4x6 prints with Custom print overlay templates",
      },
      {
        included: true,
        description: " Standard backdrop",
      },
      {
        included: true,
        description: "Instant digital sharing",
      },
    ],
  },
];

export const testimonialsPeople: { name: string; description: string }[] = [
  {
    name: "Mark T.",
    description:
      "“The team at PhotoPhoria made everything so easy. Their photo booth was a hit at our corporate event, and the props were a blast!”",
  },
  {
    name: "Emily & Jason",
    description:
      "“PhotoPhoria was the highlight of our wedding! The photobooth added so much fun, and the pictures turned out amazing. Everyone loved it!”",
  },
  {
    name: "Sarah L.",
    description:
      "“Our guests couldn’t stop talking about the photo booth! The photos are such a fun way to relive the night—thank you, PhotoPhoria!”",
  },
  {
    name: "Mark T.",
    description:
      "“The team at PhotoPhoria made everything so easy. Their photo booth was a hit at our corporate event, and the props were a blast!”",
  },
  {
    name: "Mark T.",
    description:
      "“The team at PhotoPhoria made everything so easy. Their photo booth was a hit at our corporate event, and the props were a blast!”",
  },
];

// Full Packages and Features
export const fullPackages: Package[] = [
  {
    title: "Standard Package",
    features: [
      { included: true, description: "4 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      { included: true, description: "Unlimited Digital Pictures & Gifs" },
      { included: true, description: "Virtual booth link" },
      { included: true, description: "Standard back drop" },
      { included: true, description: "Instant digital sharing" },
      { included: true, description: "HD online gallery" },
      { included: true, description: "Props bundle" },
      { included: false, description: "Booth Attendant" },
      {
        included: false,
        description: "4x6 prints with Custom print overlay templates",
      },
      { included: false, description: "Photo Album" },
    ],
  },
  {
    title: "Essential Package",
    features: [
      { included: true, description: "5 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      {
        included: true,
        description: " Unlimited Digital pictures, videos, boomerangs & GIFs",
      },
      {
        included: true,
        description: "Virtual booth link",
      },
      {
        included: true,
        description: "4x6 prints with Custom print overlay templates",
      },
      {
        included: true,
        description: " Standard backdrop",
      },
      {
        included: true,
        description: "Instant digital sharing",
      },
      {
        included: true,
        description: "HD online gallery",
      },
      {
        included: true,
        description: "Booth Attendant",
      },
      {
        included: true,
        description: "Props Bundle",
      },

      { included: false, description: "Photo Album" },
    ],
  },
  {
    title: "Premium Package",
    features: [
      { included: true, description: "6 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      {
        included: true,
        description: " Unlimited Digital pictures, videos, boomerangs & GIFs",
      },
      {
        included: true,
        description: "Virtual booth link",
      },
      {
        included: true,
        description: "4x6 prints with Custom print overlay templates",
      },
      {
        included: true,
        description: " Standard backdrop",
      },
      {
        included: true,
        description: "Instant digital sharing",
      },
      {
        included: true,
        description: "HD online gallery",
      },
      {
        included: true,
        description: "Booth Attendant",
      },
      {
        included: true,
        description: "Props Bundle",
      },

      { included: true, description: "Photo Album" },
    ],
  },
];

export const addons = [
  {
    title: "Additional Hours",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum nunc ut est varius laoreet. Curabitur varius orci commodo purus elementum aliquam.",
  },
  {
    title: "Colored Backdrop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum nunc ut est varius laoreet. Curabitur varius orci commodo purus elementum aliquam.",
  },
  {
    title: "Custom Flower Walls",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum nunc ut est varius laoreet. Curabitur varius orci commodo purus elementum aliquam.",
  },
];

export const technologyFeatures = [
  {
    title: "Stationary Mode",
    description:
      "A sleek, lightweight photobooth that’s easy to set up and perfect for any event. Stylish and compact, it pairs with any backdrop to deliver professional-quality photos and a memorable guest experience.",
  },
  {
    title: "Roaming Mode",
    description:
      "Our photobooth transforms into a handheld device, letting you roam and capture moments on the go. Perfect for mingling and ensuring everyone joins the fun, even at larger events!",
  },
  {
    title: "VESA Mount Compatibility",
    description:
      "Our photobooth head is compatible with VESA mounting systems, offering versatile setup options when paired with your own mount.",
  },
  {
    title: "Unlimited Pictures & Videos",
    description:
      "Guests can take as many photos & videos as they want during their event. Everyone can walk away with their favorite memories captured in high-quality photos.",
  },
  {
    title: "Online Gallery",
    description:
      "A secure, easily accessible online gallery where guests can view, download, and share all event photos. It’s perfect for reliving the fun or sharing memories with those who couldn’t attend.",
  },
  {
    title: "Instant Digital Sharing",
    description:
      "Guests can instantly share their photos, videos, boomerangs via email, text, airdrop, or social media directly from the booth. Perfect for spreading the fun in real time!",
  },
];
