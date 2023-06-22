export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: "FrontendMentor.io",
    items: [
      {
        name: "QR Code",
        slug: "qr-code",
        description: "QR Code component using Next.js and Material UI",
      },
    ],
  },
  {
    name: "Frontloops.io",
    items: [
      {
        name: "Boiling Dots",
        slug: "boiling-dots",
        description: "Schedule dots to boil when its timer reaches zero",
      },
      {
        name: "Segmented Control",
        slug: "segmented-control",
        description:
          "Renders a different selection component based on screen size",
      },
    ],
  },
];