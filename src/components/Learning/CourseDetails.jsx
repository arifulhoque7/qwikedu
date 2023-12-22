import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

const CourseDetails = ({
  status,
  imagePath,
  courseTitle,
  instructor,
  description,
  progressWidth,
  buttonText,
}) => {
  return (
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
            <h2 className="text-[24px] font-semibold">{courseTitle}</h2>
            <p className="mt-2 text-[#656565] text-[20px]">{instructor}</p>
            <p className="mt-2 text-[#B7BBCB] text-[17px]">{description}</p>
            <p className="my-5 font-semibold text-[16px]">You have done this</p>
            <ProgressBar
              width={500}
              primaryWidth={progressWidth}
              primaryColor="#2CBA4D"
              secondaryColor="#DFF5E4"
            />
            <button className="px-[24px] py-[13.5px] text-white font-semibold rounded-md bg-[#4366AC]">
              {buttonText}
            </button>
            {status === "completed" && (
              <button className="ml-2 px-[24px] py-[13.5px] text-[#6582BB] font-semibold rounded-md bg-white border border-[#4366AC]">
                See Video
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
