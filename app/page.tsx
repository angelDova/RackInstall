"use client";

import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
  useTransform,
} from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  content,
  generatedWords,
  pricingCards,
  products,
  words,
} from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Beam from "@/components/beam";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { GeminiEffect } from "@/components/ui/gemini-effect";
import { Bento } from "@/components/ui/bento";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col overflow-hidden">
        <div className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
            {/* Radial gradient for the container to give a faded look */}
          </div>
          <div className="flex items-center justify-center">
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              AF Rack Installations
            </p>
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              AF Rack Installations
            </p>
          </div>
        </div>
      </div>

      <div className="h-[30rem] bg-background"></div>

      {/* <div
        className=" w-full dark:border dark:border-white/[0.1] rounded-md relative pt-20 overflow-clip"
        ref={ref}
      ></div> */}
      {/* <GeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        /> */}
      <HeroParallax products={products} />

      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px] ">
        <Bento />
        {/* <h2 className="text-4xl text-center"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not <br />
          ready to commit you can get started for free.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card) => (
            //WIP: Wire up free product from stripe
            <Card
              key={card.title}
              className={clsx(
                "w-[300px] flex flex-col justify-between border-2 hover:border-primary transition duration-500 ease-in-out",
                {
                  "": card.title === "Unlimited Saas",
                }
              )}
            >
              <CardHeader>
                <CardTitle
                  className={clsx("", {
                    "text-muted-foreground": card.title !== "Unlimited Saas",
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">
                  <span>/Month</span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div className="">
                  {card.features.map((feature) => (
                    <div className="flex gap-2 items-center" key={feature}>
                      <Check className="text-muted-foreground" />
                      <p className="">{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    "w-full text-center bg-primary p-2 rounded-md",
                    { "!bg-muted-foreground": card.title !== "Unlimited Saas" }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div> */}
      </section>
    </>
  );
}

export const users = [
  {
    name: "Angel Cordova",
    designation: "Software Developer",
    image: "/assets/rack-1.jpg",
    badge: "Mentor",
  },
];
