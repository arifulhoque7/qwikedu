import React, { useState } from "react";
import CertificateDetails from "./CertificateDetails";

const CertificatePage = () => {
  return (
    <>
      <div className="col-span-2 grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 gap-9 mt-5">
          <CertificateDetails
            imagePath="/certification/cert.png"
            courseTitle="UI/UX Master Course"
            instructor="Jons Smith"
            buttonText="Download"
            imagePath2="/learn/uiux2.png"
          />
        </div>
        <div className="grid grid-cols-1 gap-9 mt-5">
          <CertificateDetails
            imagePath="/certification/cert.png"
            courseTitle="UI/UX Master Course"
            instructor="Jons Smith"
            buttonText="Download"
            imagePath2="/learn/uiux2.png"
          />
        </div>
      </div>
    </>
  );
};

export default CertificatePage;
