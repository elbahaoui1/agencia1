import { Expertise } from "@/components/expertise";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { Work } from "@/components/work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center min-h-screen px-8 bg-[#fffeff]">
      <div className="Header w-full h-fit">
        <Header />
      </div>
      <div className="Hero w-full h-fit">
        <Hero />
      </div>
      <div className="Expertise -mt-16 z-10">
        <Expertise />
      </div>
      <div className="h-40 -mt-20 w-full border-b-2 border-x-2 ">
      </div>
      <div className="Work w-full h-fit">
        <Work />
      </div>
      <div className="Partners w-full h-fit">
        <Partners />
      </div>
      <div className="h-40 w-full border-b-2 border-x-2 ">
      </div>
      <div className="Foorer -mt-16 z-10">
        <Footer/>
      </div>
    </div>
  );
}
