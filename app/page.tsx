import FeaturedServices from "@/components/sections/featured-services";
import Hero from "@/components/sections/hero";
import Team from "@/components/sections/team";
import Image from "next/image";

export default function Home() {
  return (
    <main className="border border-t-white  bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="min-h-screen">
        <Hero />
        <div className="flex items-center justify-center">
          <Image src={"/rack-15.jpeg"} alt="Rack" height={700} width={700} />
        </div>
      </div>
      <FeaturedServices />
      {/* <WhyChooseUs /> */}
      {/* <TestimonialCards /> */}
      {/* <UpcomingWebinars /> */}
      <Team />
    </main>
  );
}
