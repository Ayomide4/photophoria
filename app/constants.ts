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
      { included: true, description: "3 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      { included: true, description: "Unlimited Digital Pictures & Gifs" },
      {
        included: true,
        description: "Virtual booth link",
      },

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
      { included: true, description: "4 hours of access" },
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
    ],
  },
];

export const testimonialsPeople: { name: string; description: string }[] = [
  {
    name: "Glory & Ayo",
    description:
      "“PhotoPhoria was the highlight of our wedding! The photobooth added so much fun, and the pictures turned out amazing. Everyone loved it!”",
  },

  {
    name: "Sarah L.",
    description:
      "“Our guests couldn’t stop talking about the photo booth! The photos are such a fun way to relive the night—thank you, PhotoPhoria!”",
  },
  {
    name: "Chizoba O",
    description:
      "“Photophoria was a hit at my birthday game night! The sleek setup, high-quality photos, and fun props made the night unforgettable. My guests loved it, and the instant keepsakes were a perfect touch. Highly recommend for any event!”",
  },

  {
    name: "Subomi B.",
    description:
      "“The team at PhotoPhoria made everything so easy. Their photo booth was a hit at our corporate event, and the props were a blast!”",
  },
];

// Full Packages and Features
export const fullPackages: Package[] = [
  {
    title: "Standard",
    features: [
      { included: true, description: "3 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      {
        included: true,
        description: "Unlimited Digital pictures & GIFs",
      },
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
    title: "Essential",
    features: [
      { included: true, description: "4 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      {
        included: true,

        description: "Unlimited Digital pictures & GIFs",
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
    title: "Premium",
    features: [
      { included: true, description: "5 hours of access" },
      { included: true, description: "Setup & Breakdown" },
      {
        included: true,
        description: "Unlimited Digital pictures & GIFs",
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
      "Keep the fun going! Extend your photo booth rental for extra hours, ensuring you capture every moment without feeling rushed. Perfect for events that run late into the night!",
  },
  {
    title: "Colored Backdrop",
    description:
      "Elevate your photos with a vibrant backdrop that complements your event’s theme. Choose from a variety of colors to create the perfect aesthetic for your special occasion.",
  },
  {
    title: "Custom Flower Walls",
    description:
      "Add a touch of elegance with a stunning floral backdrop. Our custom flower walls create a beautiful setting, perfect for weddings, bridal showers, and upscale events.",
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

export const scrollToMiddle = (container: HTMLElement) => {
  if (container.children.length >= 2) {
    const middleIndex = Math.floor(container.children.length / 2);
    const middleElement = container.children[middleIndex] as HTMLElement;

    const scrollPosition =
      middleElement.offsetLeft -
      container.offsetWidth / 2 +
      middleElement.offsetWidth / 2;

    container.scrollTo({
      left: scrollPosition,
      behavior: "auto", // or 'smooth' for animation
    });
  }
};
