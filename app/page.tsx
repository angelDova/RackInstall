import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { LampComponent } from "@/components/lamp";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { clients, products } from "@/lib/constants";

import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  //WIP: remove fault IMAge for home page
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="relative flex h-screen w-full flex-col items-center !overflow-visible rounded-md bg-neutral-950 antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="mt-[-100px] flex flex-col md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center">
                <div className="m-10 flex justify-center text-center">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                  >
                    <AceternityLogo />
                    <span>Get a Quote</span>
                  </HoverBorderGradient>
                </div>

                <h1 className="bg-gradient-to-b from-white  to-neutral-600 bg-clip-text font-sans text-5xl font-bold text-transparent md:text-8xl">
                  Build your warehouse with AF Rack Installations
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <section className="mt-[50px]">
        <InfiniteMovingCards
          className="md:mt-[18rem]"
          items={clients}
          direction="right"
          speed="slow"
        />
      </section>
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mt-[-500px]">
        <LampComponent />
        <div className="-mt-72 flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
          <CardContainer className="inter-var ">
            <CardBody className="group/card relative h-auto  w-3/4 transform rounded-xl border border-black/[0.1] bg-gray-50 p-6 duration-300 ease-in-out dark:border-white/[0.2]  dark:bg-black  hover:dark:border-[#E2CBFF] dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] md:!w-[350px]">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Hobby
                <h2 className="text-6xl ">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="mt-8 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="group/card relative h-auto  w-3/4 transform rounded-xl border border-black/[0.1] bg-gray-50 p-6 duration-300 ease-in-out dark:bg-black hover:dark:border-[#E2CBFF] dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] md:!w-[350px]">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Pro Plan
                <h2 className="text-6xl ">$29</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="mt-8 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="group/card relative h-auto w-3/4 transform rounded-xl border border-black/[0.1] bg-gray-50 p-6 duration-300 ease-in-out dark:border-white/[0.2] dark:bg-black  hover:dark:border-[#E2CBFF] dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] md:!w-[350px]">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Unlimited
                <h2 className="text-6xl ">$99</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="mt-8 flex items-center justify-between">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
