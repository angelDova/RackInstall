import Category from "@/components/icons/category";
import Logs from "@/components/icons/clipboard";
import Templates from "@/components/icons/cloud_download";
import Home from "@/components/icons/home";
import Payment from "@/components/icons/payment";
import Settings from "@/components/icons/settings";
import Workflows from "@/components/icons/workflows";
import dynamic from "next/dynamic";

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}));

export const World = dynamic(
  () => import("@/components/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export const team = [
  {
    id: 1,
    name: "Elena Briggs",
    designation: "Founder/Owner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Marcus Reid",
    designation: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 3,
    name: "Julia Zhang",
    designation: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Andre Gomez",
    designation: "Accounting",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

export const pricingCards = [
  {
    title: "Starter",
    description: "Perfect for trying out plura",
    price: "Free",
    duration: "",
    highlight: "Key features",
    features: ["3 Sub accounts", "2 Team members", "Unlimited pipelines"],
    priceId: "",
  },
  {
    title: "Unlimited Saas",
    description: "The ultimate agency kit",
    price: "$199.99",
    duration: "month",
    highlight: "Key features",
    features: ["Rebilling", "24/7 Support team"],
    priceId: "price_1OmfQXH4EPQMpOlaqBMliYFr",
  },
  {
    title: "Basic",
    description: "For serious agency owners",
    price: "$49.99",
    duration: "month",
    highlight: "Everything in Starter, plus",
    features: ["Unlimited Sub accounts", "Unlimited Team members"],
    priceId: "price_1OmfQXH4EPQMpOlaVa0el5D4",
  },
];

// export const products = [
//   {
//     title: "La Mirada",
//     link: "http://localhost:3000/pricing",
//     thumbnail: "/assets/rack-1.jpg",
//   },
//   {
//     title: "La Mirada",
//     link: "http://localhost:3000/pricing",
//     thumbnail: "/assets/rack-2.jpg",
//   },
//   {
//     title: "La Mirada",
//     link: "http://localhost:3000/pricing",
//     thumbnail: "/assets/rack-3.jpg",
//   },
//   {
//     title: "La Mirada",
//     link: "http://localhost:3000/pricing",
//     thumbnail: "/assets/rack-4.jpg",
//   },
//   {
//     title: "La Mirada",
//     link: "http://localhost:3000/pricing",
//     thumbnail: "/assets/rack-5.jpg",
//   },
//   {
//     title: "La Mirada",
//     link: "http://localhost:3000/pricing",
//     thumbnail: "/assets/rack-6.jpg",
//   },
// ];

export const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
];

export const words = [
  {
    text: "Build",
  },
  {
    text: "With",
  },
  {
    text: "AF",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Rack",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Installations.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export const generatedWords = `AF Rack Installations. The Leader in Material Handling Equipment and Services`;

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/assets/rack-1.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/assets/rack-2.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/assets/rack-3.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/assets/rack-4.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/assets/rack-5.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/assets/rack-6.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/assets/rack-7.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/assets/rack-8.jpeg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/assets/rack-9.jpeg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/assets/rack-10.jpeg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/assets/rack-11.jpeg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/assets/rack-12.jpeg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/assets/rack-13.jpeg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/assets/rack-14.jpeg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/rack-15.jpeg",
  },
];
