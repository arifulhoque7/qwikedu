import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const ProfileSections = () => {
  return (
    <>
      <div className="col-span-2 grid grid-cols-1 gap-4">
        {/* Right side, first section */}
        <div className="col-span-1">
          <div
            className="bg-white p-4 flex items-center gap-5"
            style={{
              width: "1024px",
              height: "209px",
              borderRadius: "16px",
              boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* Left side: Image and Social Icons */}
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/profile/image.png" // Replace with the correct image path
                  alt="Profile"
                  width={115}
                  height={115}
                />
              </div>
              <div className="flex mt-4 justify-center gap-3">
                <FaFacebook size={20} color="#3C5A9A" />
                <FaInstagram size={20} color="#D82D7E" />
                <FaTwitter size={20} color="#1DA1F2" />
                <FaLinkedin size={20} color="#0575B3" />
              </div>
            </div>

            {/* Right side: Name, Course Enroll, Edit Profile Button */}
            <div className="w-1/3">
              <p
                className="text-gray-900 text-xl font-semibold"
              >
                John Smith
              </p>
              <p
                className="text-gray-600"
                style={{
                  color: "#949494",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                  padding: "3px 0",
                }}
              >
                01 Course Enroll
              </p>

              {/* Edit Profile Button */}
              <button
                style={{
                  color: "#28A745",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                  padding: "8px",
                  borderRadius: "8px",
                  background: "#DFF5E4",
                  marginTop: "10px",
                }}
              >
                Edit your profile
              </button>
            </div>

            {/* Vertical Line */}
            <div
              className="bg-[#E7E9EE]"
              style={{ height: "152px", width: "4px" }}
            ></div>

          
            <div className="w-2/3"> 
              <h2 className="text-gray-900 text-xl font-semibold">About Us</h2>
              <p className="text-[#949494] text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a.
              </p>
            </div>

            <div className="w-1/3"> 
              <Image
                src="/profile/image2.png" // Replace with the correct image path
                alt="Additional Image"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-9 mt-6">
          {/* First Section */}
          <div className="bg-white flex items-center">
            <div
              style={{
                width: "1024px",
                borderRadius: "16px",
                boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <div className="w-full h-[54px] bg-[#6582BB] flex items-center rounded-t-md">
                <span className="text-white text-[18px] font-semibold uppercase pl-4">
                  Education & Certifications
                </span>
              </div>

              {/* Content */}
              <div className="mx-8 my-6 flex flex-row gap-40">
                {/* Education Section */}
                <div className="pr-2 gap-4">
                  <h2 className="text-[16px] font-semibold">EDUCATION</h2>
                  <p className="mt-2 text-[#949494] text-[14px]">
                    Daffodil International University | DIU
                  </p>
                  <p className="text-[#C4C4C4] text-[14px]">BSc In CSE</p>
                  <p className="mt-2 text-[#949494] text-[14px]">
                    Dhaka College
                  </p>
                  <p className="text-[#C4C4C4] text-[14px]">HSC</p>
                </div>

                {/* Certifications Section */}
                <div className="ml-4 mt-6 md:mt-0">
                  <h2 className="text-[16px] font-semibold">CERTIFICATIONS</h2>
                  <p className="mt-2 text-[#949494] text-[14px]">
                    Google Ui/Ux Design{" "}
                  </p>
                  <p className="mt-2 text-[#949494] text-[14px]">Adobe Suite</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="bg-white flex items-center">
            <div
              style={{
                width: "1024px",
                borderRadius: "16px",
                boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <div className="w-full h-[54px] bg-[#28A745] flex items-center rounded-t-md">
                <span className="text-white text-[18px] font-semibold uppercase pl-4">
                  Work history
                </span>
              </div>
              {/* Content */}
              <div className="my-8 mx-2">
                <div className="grid grid-cols-4 gap-1 mb-4">
                  {/* Job Entry 1 */}
                  <h2 className="font-semibold ml-3">Google</h2>
                  <p className="text-[14px] text-[#949494]">Junior Engineer</p>
                  <p className="text-[14px] text-[#949494]">
                    December 2020 - March 2022
                  </p>
                  <p className="text-[14px] text-[#949494] text-center">
                    Bangladesh
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  {/* Job Entry 2 */}
                  <h2 className="font-semibold ml-3">Intel</h2>
                  <p className="text-[14px] text-[#949494]">Junior Engineer</p>
                  <p className="text-[14px] text-[#949494]">
                    December 2020 - March 2022
                  </p>
                  <p className="text-[14px] text-[#949494] text-center">
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSections;
