"use client";
import React from "react";
import ProfileMenu from "../Profile/ProfileMenu";
import CertificatePage from "./CertificatePage.jsx";

const Main = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <ProfileMenu />
        <CertificatePage />
      </div>
    </>
  );
};

export default Main;
