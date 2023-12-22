import React, { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const AccountPage = () => {
  const [showInput, setShowInput] = useState("");

  const handleAddLinkClick = (platform) => {
    setShowInput(showInput === platform ? "" : platform);
  };

  const isButtonVisible = (platform) => {
    return showInput === platform || showInput === "";
  };
  return (
    <>
      <div className="col-span-2 grid grid-cols-1">
        <div>
          <h1 className="text-[28px] font-semibold">Account</h1>

          <label className="text-[20px] font-semibold mt-4 block">
            Full name
          </label>
          <div className="flex gap-4 mt-5">
            <input
              type="text"
              placeholder="First name"
              className="border-b-2 border-gray-400 outline-none text-[20px]"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border-b-2 border-gray-400 outline-none text-[20px]"
            />
          </div>

          <div className="mt-8">
            <label className="text-[20px] font-semibold block">Email</label>
            <div className="flex gap-4 mt-5">
              <input
                style={{ width: "500px" }}
                type="text"
                placeholder="yourmail@mail.com"
                className="border-b-2 border-gray-400 outline-none text-[20px]"
              />
            </div>
          </div>

          <div className="mt-8 flex gap-28">
            <div>
              <label className="text-[20px] font-semibold">
                Choose your country
              </label>
              <div className="flex items-center border border-gray-100 rounded-md p-4 bg-white shadow-md mt-7 relative">
                <select className="appearance-none outline-none bg-transparent pr-4c font-semibold">
                  <option value="" disabled selected>
                    Country
                  </option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
                <span className="absolute right-4 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                  >
                    <path
                      d="M12 1.5L6.5 6.5L0.999999 1.5"
                      stroke="#252525"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label className="text-[20px] font-semibold">Skill</label>
              <div className="flex gap-4 mt-7">
                <div className="border border-gray-100 rounded-md p-4 bg-white shadow-md text-[#6E7697] font-semibold">
                  English
                </div>
                <div className="border border-gray-100 rounded-md p-4 bg-white shadow-md relative">
                  <select className="appearance-none outline-none bg-transparent pr-4 text-[#6E7697] font-semibold">
                    <option value="" disabled selected>
                      Levels
                    </option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                  <span className="absolute right-4 pointer-events-none mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="8"
                      viewBox="0 0 13 8"
                      fill="none"
                    >
                      <path
                        d="M12 1.5L6.5 6.5L0.999999 1.5"
                        stroke="#252525"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <label className="text-[20px] font-semibold">
              Linked Social Accounts
            </label>
            <div className="flex gap-4 mt-7">
              <FaFacebook size={35} color="#3C5A9A" />
              {isButtonVisible("facebook") && (
                <button
                  className="px-4 py-1 rounded-md bg-[#3C5A9A] text-white"
                  onClick={() => handleAddLinkClick("facebook")}
                >
                  ADD LINK
                </button>
              )}
              {showInput === "facebook" && (
                <input
                  type="text"
                  placeholder="Enter Facebook link"
                  className="text-[20px] border-b border-[#3C5A9A] outline-none"
                  style={{ width: "311px" }}
                />
              )}
            </div>
            <div className="flex gap-4 mt-7">
              <FaInstagram size={35} color="#D82D7E" />
              {isButtonVisible("instagram") && (
                <button
                  className="px-4 py-1 rounded-md bg-[#D82D7E] text-white"
                  onClick={() => handleAddLinkClick("instagram")}
                >
                  ADD LINK
                </button>
              )}
              {showInput === "instagram" && (
                <input
                  type="text"
                  placeholder="Enter Instagram link"
                  className="text-[20px] border-b border-[#D82D7E] outline-none"
                  style={{ width: "311px" }}
                />
              )}
            </div>
            <div className="flex gap-4 mt-7">
              <FaTwitter size={35} color="#1DA1F2" />
              {isButtonVisible("twitter") && (
                <button
                  className="px-4 py-1 rounded-md bg-[#1DA1F2] text-white"
                  onClick={() => handleAddLinkClick("twitter")}
                >
                  ADD LINK
                </button>
              )}
              {showInput === "twitter" && (
                <input
                  type="text"
                  placeholder="Enter Twitter link"
                  className="text-[20px] border-b border-[#1DA1F2] outline-none"
                  style={{ width: "311px" }}
                />
              )}
            </div>
            <div className="flex gap-4 mt-7">
              <FaLinkedin size={35} color="#0077B5" />
              {isButtonVisible("linkedin") && (
                <button
                  className="px-4 py-1 rounded-md bg-[#0077B5] text-white"
                  onClick={() => handleAddLinkClick("linkedin")}
                >
                  ADD LINK
                </button>
              )}
              {showInput === "linkedin" && (
                <input
                  type="text"
                  placeholder="Enter LinkedIn link"
                  className="text-[20px] border-b border-[#0077B5] outline-none"
                  style={{ width: "311px" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
