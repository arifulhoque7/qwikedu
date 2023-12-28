import React, { useState, useEffect, useRef } from "react";
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

  const subCategories = {
    Design: [
      "Graphic Design",
      "UI/UX Design",
      "3D Design",
      "Visual Design",
      // Add more subcategories for Design as needed
    ],
    Engineering: [
      "Mechanical Engineering",
      "Electrical Engineering",
      "Civil Engineering",
      // Add more subcategories for Engineering as needed
    ],
    // Add subcategories for other categories as needed
  };

  const subSubCategories = {
    "Graphic Design": [
      "Print Design",
      "Visual Design",
      "Logo & Brand",
      "Art & Illustration",
    ],
    "UI/UX Design": [
      "Website Design",
      "App Design",
      "Icon Design",
      "Landing Page Design",
    ],
    "3D Design": [
      "3D Architecture",
      "3D Industrial Design",
      "3D Fashion & Garment",
      "3D Printing Characters",
      "3D Landscape",
      "3D Game Art",
      "3D Jewelry design",
    ],
    "Visual Design": [
      "Image Editing",
      "Presentation Design",
      "Background Removal",
      "Vector Tracing",
      "Resume Design",
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryBox, setShowCategoryBox] = useState(false);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowCategoryBox(true);

    const rect = event.target.getBoundingClientRect();
    setSubmenuPosition({
      top: rect.bottom + window.scrollY + 10,
      left: rect.left + window.scrollX,
    });
    console.log("Selected Category:", category);
  };

  const categoryBoxRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (categoryBoxRef.current && !categoryBoxRef.current.contains(e.target)) {
      setShowCategoryBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const categorySubmenu =
    selectedCategory && subCategories[selectedCategory] ? (
      <div
        ref={categoryBoxRef}
        className="w-[1090px] p-6 flex flex-wrap items-start gap-32 border border-[#BEEAC8] bg-white"
        style={{
          position: "absolute",
          top: submenuPosition.top,
          left: submenuPosition.left,
          zIndex: 100,
        }}
      >
        {Object.keys(subCategories).includes(selectedCategory) &&
          subCategories[selectedCategory].map((subcategory, subIndex) => (
            <div key={subIndex}>
              <h3 className="font-semibold">{subcategory}</h3>
              <ul className="mt-7">
                {/* Check if the key exists in subSubCategories */}
                {subSubCategories[subcategory] &&
                  subSubCategories[subcategory].map(
                    (subSubcategory, ssIndex) => (
                      <li key={ssIndex} className="mb-2">
                        {subSubcategory}
                      </li>
                    )
                  )}
              </ul>
            </div>
          ))}
      </div>
    ) : null;

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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {showCategoryBox && categorySubmenu}

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
