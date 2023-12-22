"use client";
import React from "react";
import CertificateMenu from "./CertificateMenu";
import CertificatePage from "./CertificatePage";

const Main = () => {
  return (
    <>
      <div className="flex">
        <CertificateMenu />
        <div className="flex-grow">
          <CertificatePage />
        </div>
      </div>
    </>
  );
};

export default Main;
