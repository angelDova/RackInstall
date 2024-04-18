"use client";

import { BackgroundBeams } from "@/components/background-beams";
import { SignupFormDemo } from "@/components/form/quote-form";
import React, { useState } from "react";

type Props = {};

const Contact = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="min-h-screen py-12 pt-24 border border-t-white  bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="min-h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            L
          </p>
          <input
            type="text"
            placeholder="afrackinstallations@info.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default Contact;
