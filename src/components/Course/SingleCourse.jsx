// SingleCourse.js
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { TbClockHour3 } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

const SingleCourse = ({ courses }) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleViewCourseClick = (index) => {
    setClickedIndex(index);
  };
  return (
    <div className="mx-32 grid grid-cols-4 my-3">
      {courses.map((course, index) => (
        <div
          key={index}
          className="p-5 bg-gray-100 rounded-lg shadow-md mt-10"
          style={{ width: "370.667px" }}
        >
          <img
            src={course.image}
            alt="Course Image"
            className="w-96 h-44 rounded-md mb-4"
          />
          <div className="text-orange-500 font-semibold text-lg mb-2">
            {course.price}
          </div>
          <div className="text-black text-lg font-bold mb-2">
            {course.title}
          </div>
          <div className="flex items-center text-[#363636] text-[16px] mb-2 gap-2 font-normal">
            <FaRegUser
              style={{ width: "20px", height: "20px" }}
              color="#28A745"
            />
            {course.instructor}
          </div>
          <div className="flex items-center text-gray-700 text-base mb-2 gap-2">
            <FaStar style={{ width: "20px", height: "20px" }} color="#F2711C" />
            {course.rating} ({course.reviews})
          </div>
          <div className="flex items-center text-gray-700 text-base mb-2 gap-2">
            <CgFileDocument
              style={{ width: "20px", height: "20px" }}
              color="#28A745"
            />
            {course.lessons} Lessons
            <TbClockHour3
              style={{ width: "20px", height: "20px" }}
              color="#28A745"
            />
            {course.hours}
          </div>
          <div className="flex justify-between">
            <button
              className={`text-base font-semibold border-2 px-20 py-2 rounded-md my-1 transition-colors ${
                clickedIndex === index
                  ? "bg-[#23953E] text-white border-[#23953E]"
                  : "text-green-600 border-green-600"
              }`}
              onClick={() => handleViewCourseClick(index)}
            >
              View Course
            </button>
            <button className="flex items-center border-2 border-green-600 rounded-md px-3 py-2 my-1">
              <FaRegHeart
                style={{ width: "20px", height: "20px" }}
                color="#28A745"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCourse;
