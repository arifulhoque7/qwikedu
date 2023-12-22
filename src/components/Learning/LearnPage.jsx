import React, { useState } from "react";
import CourseDetails from "./CourseDetails";

const LearnPage = () => {
  const [selectedButton, setSelectedButton] = useState("inProgress");

  const handleInProgressButtonClick = () => {
    setSelectedButton("inProgress");
  };

  const handleCompletedButtonClick = () => {
    setSelectedButton("completed");
  };

  return (
    <>
      <div className="col-span-2 grid grid-cols-1 gap-4">
        {/* Buttons */}
        <div className="flex gap-5 mt-5">
          <button
            style={
              selectedButton === "inProgress" ? selectedStyle : notSelectedStyle
            }
            onClick={handleInProgressButtonClick}
          >
            IN PROGRESS
          </button>
          <button
            style={
              selectedButton === "completed" ? selectedStyle : notSelectedStyle
            }
            onClick={handleCompletedButtonClick}
          >
            COMPLETED
          </button>
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-1 gap-9 mt-5">
          {selectedButton === "inProgress" && (
            <>
              <CourseDetails
                status="inProgress"
                imagePath="/learn/uiux.png"
                courseTitle="UI/UX Master Course"
                instructor="Jons Smith"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet ut nulla eget consequat. Aenean viverra dictum risus, placerat feugiat."
                progressWidth={98}
                buttonText="Continue Learning"
              />
              <CourseDetails
                status="inProgress"
                imagePath="/learn/uiux2.png"
                courseTitle="UI/UX Master Course"
                instructor="Jons Smith"
                description="lorems ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet ut nulla eget consequat. Aenean viverra dictum risus, placerat feugiat"
                progressWidth={350}
                buttonText="Continue Learning"
              />
            </>
          )}
          {selectedButton === "completed" && (
            <CourseDetails
              status="completed"
              imagePath="/learn/uiux.png"
              courseTitle="UI/UX Master Course"
              instructor="Jons Smith"
              description="lorems ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet ut nulla eget consequat. Aenean viverra dictum risus, placerat feugiat"
              progressWidth={500}
              buttonText="Certificate Download"
            />
          )}
        </div>
      </div>
    </>
  );
};

// Button Style for Selected and Not Selected
const selectedStyle = {
  padding: "16px 32px",
  background: "#28A745",
  borderRadius: "100px",
  border: "1px solid #28A745",
  color: "#FFFFFF",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 600,
};

const notSelectedStyle = {
  padding: "16px 32px",
  color: "#28A745",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 600,
  border: "1px solid #28A745",
  background: "transparent",
  borderRadius: "100px",
};

export default LearnPage;
