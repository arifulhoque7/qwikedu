// components/ProfileMenu.js
import React, { useState } from "react";
import {
  FaUser,
  FaBook,
  FaCertificate,
  FaCog,
  FaSignOutAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";

const ProfileMenu = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const items = [
    { icon: <FaUser />, text: "My Profile" },
    { icon: <FaGraduationCap />, text: "My Learning" },
    { icon: <FaCertificate />, text: "Certification" },
    { icon: <FaCog />, text: "Settings" },
    { icon: <RiShutDownLine />, text: "Log Out" },
  ];

  return (
    <div className="col-span-1 flex justify-center">
      <ul className="space-y-2 list-none p-0 m-0">
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
                  color: 'ffffff',
                },
                className:
                  selectedItem === index ? "bg-green-500 rounded-full p-1" : "bg-gray-800 rounded-full p-1",
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
      </ul>
    </div>
  );
};

export default ProfileMenu;
