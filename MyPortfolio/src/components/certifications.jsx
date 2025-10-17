import React from "react";
import CertificationsCard from "./certificationCard"; // Import the card component

function Certifications() {
  const certificates = [
    {
      id: 1,
      title: "The Web Developer Bootcamp 2024",
      authority: "Udemy - Colt Steele",
      image:
        "https://res.cloudinary.com/dtyu88isr/image/upload/v1760604304/v4xmnvobcdcgopnnrdp9.jpg",
      link: "https://www.udemy.com/certificate/UC-2c185c64-9547-46e5-a17e-9844c42ed695/",
    },
   
    {
      id: 2,
      title: "Java Foundation Certification",
      authority: "Infosys Springboard",
      image:
        "https://res.cloudinary.com/dtyu88isr/image/upload/v1760604305/npl1uerudk0mrxvmiio5.jpg",
      link: "https://drive.google.com/file/d/1EtiYmgVPkMkDQeoX0MtoxvcdS4B-Qshd/view?usp=sharing",
    },
     {
      id: 3,
      title: "Operating Systems Basics",
      authority: "Cisco Networking Academy program.",
      image:
        "https://res.cloudinary.com/dtyu88isr/image/upload/v1760604305/bndmfsw8lbf8idfdzxfv.jpg",
      link: "https://drive.google.com/file/d/1cCQ4_yRcDHNCCklfAbbxyiYKodY65RHu/view?usp=sharing",
    },
     {
      id: 4,
      title: "Strategy Formulation and Data Visualization",
      authority: "Indian Institute of Technology Madras",
      image:
        "https://res.cloudinary.com/dtyu88isr/image/upload/v1760543400/bxvgyuqlyshucndula1c.jpg",
      link: "https://drive.google.com/file/d/1kQu0QbW8kJ6YE6OPs2Q_kPZfM1fZIpAz/view?usp=sharing",
    },
   
    {
      id: 5,
      title: "Artificial Intelligence with Real-Time Application Projects",
      authority: "Aqmenz Automation Pvt. Ltd.",
      image:
        "https://res.cloudinary.com/dtyu88isr/image/upload/v1760538572/ovzcajkg0tuxtwigpomd.jpg",
      link: "https://drive.google.com/file/d/1kQu0QbW8kJ6YE6OPs2Q_kPZfM1fZIpAz/view?usp=sharing",
    },
    {
      id: 6,
      title: "Database Management System Part - 1",
      authority: "Infosys Springboard",
      image:
        "https://res.cloudinary.com/dtyu88isr/image/upload/v1760604305/adre3zldmzia33irkwdw.jpg",
      link: "https://drive.google.com/file/d/1n2ZSwsPh9SUxLMBdHSqjDLnKcXCm60J9/view?usp=sharing",
    },
  ];

  return (
    <>
      {/* Heading */}
      <h1 className="text-white flex justify-center text-center text-3xl lg:text-4xl font-bold mb-3 underline underline-offset-2">
        Certifications
      </h1>
      <p className="mt-2 text-white text-center font-semibold max-w-md mx-auto">
        Here are some of the certifications I’ve earned that strengthened my technical
        foundation and professional expertise.
      </p>

      {/* Cards Grid */}
      <div className="justify-center text-center">
        <div className="flex flex-wrap justify-center gap-6 p-6 w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-20">
          {certificates.map((certificate) => (
            <CertificationsCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Certifications;
