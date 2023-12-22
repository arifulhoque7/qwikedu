"use client";
import React from "react";
import ProfileMenu from "../Profile/ProfileMenu";
import LearnPage from "./LearnPage.jsx";

const Main = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <ProfileMenu />
        <LearnPage />
      </div>
    </>
  );
};

export default Main;
