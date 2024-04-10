import React from "react";
import ServicesButton from "@/components/buttons/services-button";
import { PinContainer } from "@/components/3d-pin";
import { Services } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  image?: string;
  isFeatured: boolean;
}

function FeaturedServices() {
  const ServiceData = Services.map((category) => category.service)
    .flat() // flatten the array of arrays into a single array
    .filter((service: Service) => service.isFeatured);

  return (
    <div className="bg-neutral-950 py-12">
      <div className="">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-teal-600">
            FEATURED SERVICES
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
            Build With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3">
          {ServiceData.map((service: Service) => (
            <div className="flex justify-center" key={service.id}>
              <div className="h-[25rem] sm:h-[30rem] max-w-2xl flex items-center justify-center ">
                <PinContainer title="/rack-instal.vercel.app">
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      {service.title}
                    </h3>

                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        {service.description}
                      </span>
                    </div>
                    <Link href={"/pricing"}>
                      {service.image && (
                        <div className="flex flex-1 w-full rounded-lg mt-4">
                          <Image
                            src={service.image}
                            alt="thumnail"
                            height={250}
                            width={270}
                          />
                        </div>
                      )}
                    </Link>
                  </div>
                </PinContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <ServicesButton />
      </div>
    </div>
  );
}

export default FeaturedServices;
