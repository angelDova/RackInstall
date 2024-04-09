import React from "react";
import { WavyBackground } from "@/components/wavy-background";
import { team } from "@/lib/constants";
import { AnimatedTooltip } from "../animated-tooltip";

function Team() {
  return (
    <div className="relative flex h-[60rem] items-center justify-center overflow-hidden md:h-[80rem]">
      <WavyBackground className="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center">
        <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
          Meet Our Team
        </h2>
        <p className="mb-4 text-center text-base text-white md:text-lg">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="mb-10 flex w-full flex-row items-center justify-center">
          <AnimatedTooltip items={team} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Team;
