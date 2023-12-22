import React, { useState } from "react";
import Image from "next/image";
import { FaCertificate } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const CertificateMenu = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const items = [
    { icon: <MdOutlineDashboard />, text: "Dashboard" },
    { icon: <FaRegUserCircle />, text: "My Profile" },
    { icon: <FaCertificate />, text: "My courses" },
    { icon: <BsJournalBookmarkFill />, text: "Certificate" },
    { icon: <IoSettings />, text: "Settings" },
    { icon: <IoLogOutOutline />, text: "Log Out" },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center ml-[380px]">
        <div className="mb-3 rounded-full overflow-hidden">
          <Image
            src="/profile/image.png" // Replace with the correct image path
            alt="Profile"
            width={132}
            height={132}
          />
        </div>
        <div className="text-[18px] font-semibold my-2">Jhon Karim</div>
        <div className="text-gray-600 text-[18px] mb-14">#12345</div>

        <ul className="space-y-3 list-none p-0 m-0 items-center justify-center">
          {items.map((item, index) => (
            <li
              key={index}
              className={`flex items-center ${
                selectedItem === index
                  ? "bg-[#DFF5E4] rounded-full py-3 pr-20 pl-5"
                  : "py-3 pr-20 pl-5"
              }`}
            >
              <div className="mr-2">
                {React.cloneElement(item.icon, {
                  style: {
                    fontSize: "26px",
                  },
                  className:
                    selectedItem === index
                      ? "text-[#28A745]"
                      : "text-[#363636]",
                })}
              </div>
              <a
                href="#"
                className={`block ${
                  selectedItem === index
                    ? "text-[#28A745] font-poppins font-medium md:text-lg text-left"
                    : "text-gray-800 font-poppins font-medium md:text-lg text-left"
                }`}
                onClick={() => handleItemClick(index)}
              >
                {item.text}
              </a>
            </li>
          ))}

          {/* Vertical line */}
        </ul>
      </div>
      <div className="absolute top-3 right-2/3 h-full bg-[#C4C4C4] w-[1px]"></div>
    </>
  );
};

export default CertificateMenu;
