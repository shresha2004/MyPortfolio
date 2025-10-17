import React, { useState } from "react";

function Certifications({ certificate }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {/* Card */}
      <div
        className="bg-zinc-800 border border-green-600 rounded-lg shadow-lg shadow-black w-80 cursor-pointer hover:scale-105 transition duration-300 overflow-hidden"
        onClick={openModal}
      >
        {/* Certificate Image */}
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-48 object-cover"
        />

        {/* Card Content */}
        <div className="p-4 text-center">
          <h2 className="text-white text-lg font-bold mb-1">
            {certificate.title}
          </h2>
          <p className="text-green-500 text-sm mb-3">
            Authorized by {certificate.authority}
          </p>
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            View Certificate
          </a>
        </div>
      </div>

      {/* Modal for Enlarged View */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeModal}
          >
            &times;
          </button>

          <div className="bg-zinc-900 rounded-lg shadow-lg shadow-black p-6 max-w-3xl w-full flex flex-col items-center">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto rounded-lg mb-4 object-contain"
            />
            <h2 className="text-white text-xl font-bold mb-2">
              {certificate.title}
            </h2>
            <p className="text-green-500 text-sm mb-4">
              Authorized by {certificate.authority}
            </p>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              View Certificate
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Certifications;
