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
      {
        name: "Quick Change Tab",
        slug: "quick-change-tab",
        description:
          "Tab component that can also change its index via a Text Input",
      },
      {
        name: "Toggles",
        slug: "toggles",
        description:
          "Whenever a switch is toggled, all other switches are randomly toggled",
      },
      {
        name: "Step Progress",
        slug: "step-progress",
        description: "Data submission with progress steps",
      },
      {
        name: "Typing Animation",
        slug: "typing-animation",
        description: "Text that simulates auto-typing",
      },
    ],
  },
];
