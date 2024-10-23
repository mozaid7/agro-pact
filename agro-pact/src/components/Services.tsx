import { AiOutlineBulb } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import { PiLeaf } from "react-icons/pi";
import { TbWorldDollar } from "react-icons/tb";

const Services = () => {
  return (
    <>
      <section className="relative h-auto w-full z-10 bg-[#ffffff] border-[#f3f1ec] border-8 rounded-3xl my-10 shadow-lg py-8">
        <div className="grid gap-4 md:flex md:p-16 p-8 text-zinc-800">
          <h1 className="text-4xl md:text-5xl justify-start flex items-start md:w-1/2">
            How it Works
          </h1>
          <p className="md:w-1/2 text-sm md:text-base">
            We aim to create an online marketplace that connects farmers and
            buyers for transparent, automated contract farming agreements. Using
            blockchain technology, we ensure security, trust, and transparency
            in every transaction.
          </p>
        </div>

        <div className="grid md:grid-rows-1 md:grid-cols-4 w-full *:h-auto px-6 *:rounded-3xl gap-4 *:border *:border-zinc-400 *:transition-all *:ease-in-out *:duration-300 *:px-4 *:py-10">
          <div className="hover:bg-[#27272a] hover:text-white flex flex-col">
            <div className=" bg-[#008165] text-white mr-auto p-2 rounded-2xl">
              <AiOutlineBulb className=" rounded-xl size-10" />
            </div>
            <h2 className="text-3xl py-6">Create</h2>
            <p>
              Define your requirements by creating a custom contract. Specify
              the crop type, quantity, and delivery date tailored to your needs,
              and connect directly with farmers.
            </p>
          </div>
          <div className="hover:bg-[#27272a] hover:text-white flex flex-col">
            <div className=" bg-[#008165] text-white mr-auto p-2 rounded-2xl">
              <MdOutlineFileUpload className=" rounded-xl size-10" />
            </div>
            <h2 className="text-3xl py-6">Publish</h2>
            <p>
              Once your contract is ready, publish it on our platform using
              blockchain technology. Ensure secure, transparent, and
              tamper-proof agreements with farmers.
            </p>
          </div>
          <div className="hover:bg-[#27272a] hover:text-white flex flex-col">
            <div className=" bg-[#008165] text-white mr-auto p-2 rounded-2xl">
              <PiLeaf className=" rounded-xl size-10" />
            </div>
            <h2 className="text-3xl py-6">Grow</h2>
            <p>
              Browse available contracts, negotiate prices, and agree on
              delivery deadlines. View and accept the contract & cultivate the
              crops according to the contract specifications, ensuring
              high-quality produce and increased profits.
            </p>
          </div>
          <div className="hover:bg-[#27272a] hover:text-white flex flex-col">
            <div className=" bg-[#008165] text-white mr-auto p-2 rounded-2xl">
              <TbWorldDollar className=" rounded-xl size-10" />
            </div>
            <h2 className="text-3xl py-6">Market</h2>
            <p>
              Expand your reach and get access to fresh produce directly from
              farmers. This marketplace helps farmers boost profits while buyers
              receive quality crops right from the source.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
