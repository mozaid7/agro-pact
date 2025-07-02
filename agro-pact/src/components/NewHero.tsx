import NavClient from "./NavClient";
import { ReactLenis } from "@studio-freight/react-lenis";
import Image from "next/image";
import DashboardScreenDemo from "./DashboardScreenDemo";



const SECTION_HEIGHT = 200;

const Hero = () => {
  return (
    <div className="z-0">
      <section
        style={{ height: `calc(${SECTION_HEIGHT}px + 70vh)` }}
        className="relative w-full"
      >
        <div className="flex items-center justify-center pt-24 gap-2 z-10">
          <div className="w-32 items-center">
            <Image
              src="./grain_img.svg"
              className="h-[55vh] w-fit object-cover"
              width={24}
              height={24}
              alt="fdsf"
              priority
            />
          </div>
          <div className="flex flex-col *:text-8xl *:tracking-tighter leading-tight font-sans font-extrabold text-[#84b0c2] z-0">
            <h1>Every Grain Holds</h1>
            <h1 className="uppercase italic text-zinc-900 tracking-tighter">
              Value & Purpose
            </h1>
            <h1>Ensuring </h1>
            <h1 className="tracking-tighter">
              <span className="text-zinc-900 uppercase italic">None</span> go to{" "}
              <span className="uppercase text-[#008150] italic">Waste.</span>
            </h1>
          </div>
        </div>
      </section>

      <div className="items-center flex flex-col justify-center pt-16">
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-gray-800 text-center py-2">
          Your Trusted Partner in Agriculture
        </h1>
        <h2 className="text-zinc-500 text-xl text-center">
          Connecting Farmers & Buyers with Transparent & Secure Farming
          Contracts.
        </h2>
        <a
          href="#_"
          className="my-3 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
        >
          Sign Up to Get Started!
        </a>
      </div>

      <DashboardScreenDemo />
    </div>
  );
};

const NewHero = () => {
  return (
    <>
      <NavClient />
      <div className="bg-[#e4efe6]">
        <ReactLenis
          root
          options={{
            lerp: 0.05,
            syncTouch: true,
          }}
        >
          <Hero />
        </ReactLenis>
      </div>
    </>
  );
};

export default NewHero;
