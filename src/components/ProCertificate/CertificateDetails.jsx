import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

const CourseDetails = ({
  imagePath,
  courseTitle,
  instructor,
  progressWidth,
  buttonText,
}) => {
  return (
    <div className="bg-[#F6F6F6] flex items-center">
      <div
        style={{
          width: "900px",
          borderRadius: "16px",
          boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Content */}
        <div className="mx-8 my-6 flex flex-row gap-4">
          {/* Course Image */}
          <div>
            <Image
              src={imagePath}
              alt="Profile"
              width={900}
              height={900}
              style={{
                borderRadius: "6px",
              }}
            />
          </div>

          {/* Course Details */}
          <div className="ml-4 mt-6 md:mt-0">
            <h2 className="text-[20px] font-semibold">{courseTitle}</h2>
            <p className="mt-2 text-[#30487A] text-[18px] font-semibold">{instructor}</p>
            <ProgressBar
              width={500}
              primaryWidth={progressWidth}
              primaryColor="#2CBA4D"
              secondaryColor="#DFF5E4"
            />
            <button className="px-[190px] py-[13.5px] text-white font-semibold rounded-md bg-[#4366AC]">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
