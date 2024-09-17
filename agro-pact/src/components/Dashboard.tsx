import React from "react";
import { FaFileContract, FaRegUserCircle } from "react-icons/fa";
import { GrCube } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TbHistoryToggle } from "react-icons/tb";

const Dashboard = () => {
  return (
    <div className="fixed flex top-40 left-10 justify-start items-center">
      <div className="w-64 bg-white h-auto p-6 flex flex-col justify-between border-8 border-white rounded-3xl shadow-lg">
        <div>
          <span className="text-lg font-semibold tracking-tight py-4 flex justify-start items-center gap-2">
            <GrCube className="size-6" />
            <p>Dashboard</p>
          </span>
          {/* Menu Items */}
          <nav className="space-y-2">
            <button className="flex justify-start items-center gap-2 py-2 px-2 w-full *:hover:invert hover:bg-[#6b5036] rounded-xl m-2 transition-all ease-in-out duration-300 ">
              <MdOutlineTravelExplore className="size-6" />
              <p>Browse</p>
            </button>
            <button className="flex justify-start items-center gap-2 py-2 px-2 w-full *:hover:invert hover:bg-[#6b5036] rounded-xl m-2 transition-all ease-in-out duration-300 ">
              <FaFileContract className="size-6" />
              <p>Contracts</p>
            </button>
            <button className="flex justify-start items-center gap-2 py-2 px-2 w-full *:hover:invert hover:bg-[#6b5036] rounded-xl m-2 transition-all ease-in-out duration-300 ">
              <TbHistoryToggle className="size-6" />
              <p>History</p>
            </button>
          </nav>
        </div>

        {/* User Section */}
        <div className="space-y-4 pt-40">
          <button className="flex justify-start mx-0 items-center gap-2 py-2 px-2 w-full *:hover:invert hover:bg-black rounded-xl m-2 transition-all ease-in-out duration-300 ">
            <IoSettingsOutline className="size-6" />
            <p>Settings</p>
          </button>
          <div className="flex items-center space-x-4">
            <FaRegUserCircle className="size-8" />
            <div>
              <h4 className="font-semibold text-base">Akash Maurya</h4>
              <p className="text-gray-600 text-sm">akash@mail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
