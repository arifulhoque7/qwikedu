import React from "react";
import Image from "next/image";
import CertificateDetails from "./CertificateDetails";
const CertificatePage = () => {
  return (
    <>
      <div className="flex items-center ml-12">
        <div className="relative">
          <Image
            src="/certification/cert2.png"
            alt="Cover Image"
            width={450}
            height={512}
            layout="responsive"
          />
          <div className="absolute left-0 bottom-60 p-4">
            <p className="text-[#6582BB]">September 4, 2023</p>
          </div>
          <div className="absolute left-0 bottom-32 p-4">
            <h1 className="text-4xl font-bold">Welcome Back, John!</h1>
            <p className="text-gray-600 mt-2">
              Always stay updated in your student portal
            </p>
          </div>
        </div>
      </div>
      <div className="ml-12">
        <div className="grid grid-cols-1 gap-9 mt-5">
          <CertificateDetails
            status="inProgress"
            imagePath="/certification/cert.png"
            courseTitle="WordPress Theme Design Mastery"
            instructor="Jons Smith"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet ut nulla eget consequat. Aenean viverra dictum risus, placerat feugiat."
            progressWidth={500}
            buttonText="Download Now"
          />
        </div>
      </div>
    </>
  );
};

export default CertificatePage;
