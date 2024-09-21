import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react"; // Import useSession
import {
  FaFileContract,
  FaRegUserCircle,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { GrCube } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TbHistoryToggle } from "react-icons/tb";

const Dashboard = () => {
  const { data: session } = useSession(); // Get the session data
  const [isContractsOpen, setContractsOpen] = useState(false);

  const toggleContracts = () => setContractsOpen(!isContractsOpen);

  return (
    <div className="fixed flex top-40 left-10 justify-start items-center">
      <div className="w-64 bg-white h-auto p-6 flex flex-col justify-between border-8 border-white rounded-3xl shadow-lg">
        <div>
          <span className="text-lg font-semibold tracking-tight py-4 flex justify-start items-center gap-2">
            <GrCube className="size-6" />
            <p>Dashboard</p>
          </span>
          <nav className="space-y-2">
            <button className="flex justify-between items-center py-2 px-2 w-full hover:bg-[#5ba268] rounded-xl m-2 transition-all ease-in-out duration-300 ">
              <div className="flex items-center gap-2">
                <MdOutlineTravelExplore className="size-6" />
                <p>Browse</p>
              </div>
            </button>

            <div>
              <button
                onClick={toggleContracts}
                className="flex justify-between items-center py-2 px-2 w-full hover:bg-[#5ba268] rounded-xl m-2 transition-all ease-in-out duration-300 "
              >
                <div className="flex items-center gap-2">
                  <FaFileContract className="size-6" />
                  <p>Contracts</p>
                </div>
                {isContractsOpen ? <FaChevronDown /> : <FaChevronRight />}
              </button>

              {isContractsOpen && (
                <div className="ml-6 space-y-1 text-base">
                  <Link href="createContract">
                    <button className="flex justify-start items-center gap-2 py-1 px-2  w-full hover:bg-[#5ba268] rounded-xl transition-all ease-in-out duration-300 ">
                      <p>Create Contract</p>
                    </button>
                  </Link>
                  <button className="flex justify-start items-center gap-2 py-1 px-2 w-full hover:bg-[#5ba268] rounded-xl transition-all ease-in-out duration-300 ">
                    <p>Contract History</p>
                  </button>
                </div>
              )}
            </div>

            <button className="flex justify-between items-center py-2 px-2 w-full hover:bg-[#5ba268] rounded-xl m-2 transition-all ease-in-out duration-300 ">
              <div className="flex items-center gap-2">
                <TbHistoryToggle className="size-6" />
                <p>History</p>
              </div>
            </button>
          </nav>
        </div>

        <div className="space-y-4 pt-40">
          <button className="flex justify-between items-center py-2 px-2 w-full hover:bg-[#5ba268] rounded-xl m-2 transition-all ease-in-out duration-300 ">
            <div className="flex items-center gap-2">
              <IoSettingsOutline className="size-6" />
              <p>Settings</p>
            </div>
          </button>
          <div className="flex items-center space-x-4">
            <FaRegUserCircle className="size-8" />
            <div>
              <h4 className="font-semibold text-base">
                {session?.user?.name || "Guest"}
              </h4>
              <p className="text-gray-600 text-sm">{session?.user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
