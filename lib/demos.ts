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
      {
        name: "Magic Square",
        slug: "magic-square",
        description: 'Square that rotates "in 3D" based on the mouse cursor',
      },
      {
        name: "Infinite Scroll",
        slug: "infinite-scroll",
        description: "New elements show up as the user scrolls down",
      },
      {
        name: "Sidebar",
        slug: "sidebar",
        description:
          "Sidebar navigation that closes with buttons or clicks outside",
      },
      {
        name: "Sticky Note",
        slug: "sticky-note",
        description:
          "Whenever you scroll and element is about to get off the screen, it should stick to the top",
      },
      {
        name: "Drag and Drop",
        slug: "drag-and-drop",
        description: "Card that can be dragged with the cursor",
      },
      {
        name: "Keycode",
        slug: "keycode",
        description: "Verification code form",
      },
      {
        name: "List Builder",
        slug: "list-builder",
        description: "Build list of ingredients by picking them",
      },
      {
        name: "Carousel",
        slug: "carousel",
        description: "Carousel component with previous and next buttons",
      },
    ],
  },
];
