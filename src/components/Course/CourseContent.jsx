import React, { useState } from "react";
import SingleCourse from "./SingleCourse";

const CourseContent = () => {
  const categories = [
    "Design",
    "Engineering",
    "Business",
    "Computer Science",
    "Digital Marketing",
    "Communication",
    "Accounting",
    "Programming & Tech",
  ];
  const courses = [
    {
      image: "/course/1.png",
      price: "$300",
      title: "Foundations Of Digital Marketing",
      instructor: "Ishrak Hossain",
      rating: "4.8",
      reviews: "15.6k reviews",
      lessons: "14",
      hours: "13 hrs 20 min",
    },
    {
      image: "/course/2.png",
      price: "$300",
      title: "UI/UX Design Guide",
      instructor: "Ishrak Hossain",
      rating: "4.8",
      reviews: "15.6k reviews",
      lessons: "14",
      hours: "13 hrs 20 min",
    },
    {
      image: "/course/3.png",
      price: "$300",
      title: "Graphics Design",
      instructor: "Ishrak Hossain",
      rating: "4.8",
      reviews: "15.6k reviews",
      lessons: "14",
      hours: "13 hrs 20 min",
    },
    {
      image: "/course/4.png",
      price: "$300",
      title: "Spoken English",
      instructor: "Ishrak Hossain",
      rating: "4.8",
      reviews: "15.6k reviews",
      lessons: "14",
      hours: "13 hrs 20 min",
    },
    {
      image: "/course/5.png",
      price: "$300",
      title: "Ethical Hacking",
      instructor: "Ishrak Hossain",
      rating: "4.8",
      reviews: "15.6k reviews",
      lessons: "14",
      hours: "13 hrs 20 min",
    },
    {
      image: "/course/6.png",
      price: "$300",
      title: "Data Entry",
      instructor: "Ishrak Hossain",
      rating: "4.8",
      reviews: "15.6k reviews",
      lessons: "14",
      hours: "13 hrs 20 min",
    },
    {
      image: "/course/7.png",
      price: "$300",
      title: "Motion Graphics",
      instructor: "Ishrak Hossain",
      rating: "4.8",
      reviews: "15.6k reviews",
      lessons: "14",
      hours: "13 hrs 20 min",
    },
    {
      image: "/course/8.png",
      price: "$300",
      title: "Photography",
      instructor: "Ishrak Hossain",
      rating: "4.8",
      reviews: "15.6k reviews",
      lessons: "14",
      hours: "13 hrs 20 min",
    },
    {
      image: "/course/8.png",
      price: "$300",
      title: "WordPress Theme Design Mastery",
      instructor: "Ishrak Hossain",
      rating: "4.8",
      reviews: "15.6k reviews",
      lessons: "14",
      hours: "13 hrs 20 min",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryBox, setShowCategoryBox] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowCategoryBox(true);
  };

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : [];

  return (
    <>
      <div className="flex items-center justify-between my-10 mx-10">
        <div className="flex items-center space-x-24">
          {/* Left arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
          >
            <path
              d="M8.40039 16.5L0.900391 9M0.900391 9L8.40039 1.5M0.900391 9H18.9004"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          {/* Categories */}
          {categories.map((category, index) => (
            <div
              key={index}
              className={`text-gray-800 text-base font-semibold ${
                selectedCategory === category ? "text-green-600" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}

        

          {/* Right arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M13.5996 4.5L21.0996 12M21.0996 12L13.5996 19.5M21.0996 12L3.09961 12"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <SingleCourse courses={courses} />
      <div className="flex justify-center">
        <button className="border border-[#4366AC] rounded-md px-3 py-2 my-1 bg-[#4366AC] text-[#FFFFFF] text-bold">
          All Courses
        </button>
      </div>
    </>
  );
};

export default CourseContent;
