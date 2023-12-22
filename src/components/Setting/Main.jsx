"use client";
import React from "react";
import ProfileMenu from "../Profile/ProfileMenu";
import AccountPage from "./AccountPage.jsx";

const Main = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <ProfileMenu />
      <AccountPage />
    </div>
  );
};

export default Main;
