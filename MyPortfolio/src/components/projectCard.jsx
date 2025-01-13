import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function ProjectCard({ project }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <div
                className="bg-zinc-800 border w-80 h-100 border-green-600 rounded-lg shadow-lg shadow-black p-1 overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
                onClick={openModal}
            >
                {/* Image Carousel */}
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000 }}
                    loop
                    className="w-full h-48"
                >
                    {project.images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Card Content */}
                <div className="p-4">
                    <div className="grid grid-cols-3">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="text-green-600 bg-gray-900 text-sm px-4 w-min text-sm rounded-full mr-1 mb-1"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-green-600 text-xl font-bold text-white">{project.title}</h2>
                    <div className="text-zinc-500 text-sm ">{project.date}</div>
                    <p className="text-zinc-200 mt-2 mb-3">{project.description} </p>

                    
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center overflow-y-auto items-center z-50 p-4">
                    <button
                        className="absolute top-4 right-4 text-white text-2xl font-bold"
                        onClick={closeModal}
                    >
                        &times;
                    </button>

                    <div className="w-full max-w-4xl bg-zinc-800 rounded-lg shadow-lg shadow-black p-4 flex flex-col items-center overflow-auto">
                        {/* Image Swiper */}
                        <div className="w-full h-auto mb-3">
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{ delay: 2000 }}
                                loop
                                className="w-full h-auto"
                            >
                                {project.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={image}
                                            alt={`Slide ${index + 1}`}
                                            className="w-full h-auto object-contain rounded-lg"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Content Section */}
                        <div className="text-start">
                            <h2 className="text-white text-xl font-bold">{project.title}</h2>
                            <div className="text-zinc-500 text-sm ">{project.date}</div>
                            <p className="text-zinc-200 mt-4 text-sm">{project.description}</p>
                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-9 gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-green-600 bg-gray-900 text-xs px-3 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between mt-6">
                                <a
                                    href={project.appLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-14 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                >
                                    View App
                                </a>
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-14 py-2 bg-gray-900 text-white rounded-lg hover:bg-green-700"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectCard;
