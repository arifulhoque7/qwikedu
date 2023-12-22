import React from "react";
import Image from "next/image";

const CertificateDetails = ({
  imagePath,
  courseTitle,
  instructor,
  buttonText,
  imagePath2,
}) => {
  return (
    <div className="bg-white flex items-center">
      <div
        className="w-1024px rounded-lg shadow-lg flex flex-col"
      >
        {/* Content */}
        <div className="flex mx-8 my-6 gap-4">
          {/* Course Image */}
          <div>
            <Image
              src={imagePath}
              alt="Profile"
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>

          {/* Course Details */}
          <div className="ml-4 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold">{courseTitle}</h2>
            <p className="mt-2 text-gray-700 text-lg">{instructor}</p>
            <p className="my-5 font-semibold text-lg">You have completed this</p>
            <button className="px-4 py-2 text-white font-semibold rounded-md bg-green-500">
              {buttonText}
            </button>
          </div>

          {/* Second Image */}
          <div className="flex items-end">
            <Image
              src={imagePath2}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetails;
