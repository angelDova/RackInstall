import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { LampComponent } from "@/components/lamp";
import React from "react";
import priceData from "@/data/prices-data.json";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen bg-neutral-950 sm:py-12 sm:pt-24">
      {/* <h1 className="mb-8 text-center font-sans text-lg font-bold text-white md:text-7xl">
        All Courses ({courseData.courses.length})
      </h1> */}
      <LampComponent />

      <div className="flex flex-wrap justify-center gap-40">
        {priceData.prices.map((price) => (
          <CardContainer key={price.id} className="inter-var m-4 -mt-36">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {price.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                {price.description}
              </CardItem>
              <CardItem translateZ="100" className="mt-4 w-full">
                <Image
                  src={price.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                  alt={price.title}
                />
              </CardItem>
              <div className="mt-20 flex items-center justify-between">
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
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default page;
