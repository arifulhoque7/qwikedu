import React, { useState } from "react";
import Image from "next/image";

const SettingsPage = () => {
  const [selectedTab, setSelectedTab] = useState("editProfile");

  return (
    <>
      <div className="flex items-center ml-12">
        <div className="relative">
          <Image
            src="/certification/cert2.png"
            alt="Cover Image"
            width={450}
            height={512}
            layout="responsive"
          />
          <div className="absolute left-0 bottom-60 p-4">
            <p className="text-blue-600">September 4, 2023</p>
          </div>
          <div className="absolute left-0 bottom-32 p-4">
            <h1 className="text-4xl font-bold">Welcome Back, John!</h1>
            <p className="text-gray-600 mt-2">
              Always stay updated in your student portal
            </p>
          </div>
        </div>
      </div>
      <div className="m-14">
        <div className="grid grid-cols-1 gap-9 mt-5">
          <div className="flex items-center gap-[24px]">
            <div
              className={`option cursor-pointer ${
                selectedTab === "editProfile" ? "border-b-2 border-green-500" : ""
              }`}
              onClick={() => setSelectedTab("editProfile")}
            >
              <span className="option-text text-lg font-semibold">Edit Profile</span>
            </div>
            <div
              className={`option cursor-pointer ${
                selectedTab === "password" ? "border-b-2 border-green-500" : ""
              }`}
              onClick={() => setSelectedTab("password")}
            >
              <span className="option-text text-lg font-semibold">Password</span>
            </div>
          </div>
          <div className="w-[813px] h-[1px] bg-gray-300"></div>
          <div className="space-y-[40px]">
            <div className="flex items-center">
              <label className="text-lg font-semibold">Current Password</label>
              <input className="w-[471px] h-[45px] border border-gray-300 pl-[3px] ml-[40px]" type="password" />
            </div>
            <div className="flex items-center">
              <label className="text-lg font-semibold">New Password</label>
              <input className="w-[471px] h-[45px] border border-gray-300 pl-[3px] ml-[70px]" type="password" />
            </div>
            <div className="flex items-center">
              <label className="text-lg font-semibold">Confirm Password</label>
              <input className="w-[471px] h-[45px] border border-gray-300 pl-[3px] ml-[40px]" type="password" />
            </div>
            <div className="flex items-center">
              <button className="w-[180px] h-[45px] bg-[#23953E] rounded-sm text-white font-semibold text-base mt-[10px] ml-[200px]">
                Update Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
