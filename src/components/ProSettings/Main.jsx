"use client";
import React from "react";
import CertificateMenu from "../ProCertificate/CertificateMenu";
import SettingsPage from "./SettingsPage";

const Main = () => {
  return (
    <>
      <div className="flex">
        <CertificateMenu />
        <div className="flex-grow">
          <SettingsPage />
        </div>
      </div>
    </>
  );
};

export default Main;
