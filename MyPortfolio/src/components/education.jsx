import React from 'react';

const Education = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center justify-center text-white mt-10 underline underline-offset-2">Education</h1>
      <div className="flex items-center justify-center mt-3">
        <div className="text-white text-center font-semibold max-w-2xl mx-auto">
          My education has been a journey of growth and learning, blending technical expertise with practical
          experiences. It has shaped my skills, broadened my perspectives, and fueled my passion for continuous
          improvement.
        </div>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative max-w-3xl mx-auto mt-8 mb-10">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 h-full border-l-2 border-green-600"></div>

        {/* Moving Arrow */}
        <div className="absolute left-[1.25rem] top-0 animate-bounce">
          <div className="w-3 h-3 bg-green-600 rotate-45"></div>
        </div>

        {/* First Card */}
        <div className="relative flex items-center space-x-4 mb-10">
        <div className="absolute w-5 h-5 border border-green-600 rounded-full -left-3"></div>
        <div className="ml-10 border border-green-600 rounded-lg p-6 bg-zinc-900 shadow-md shadow-green-600 w-full">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="./src/assets/NmitLogo.jpg"
                alt="Nitte Meenakshi Logo"
                className="w-12 h-12 rounded"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Nitte Meenakshi Institute of Technology, Bengaluru.
                </h3>
                <p className="text-sm text-zinc-500">Bachelor of Engineering - BE, Computer Science and Engineering</p>
                <p className="text-sm text-zinc-500">Dec 2022 - Jul 2026</p>
              </div>
            </div>
            <p className="text-sm text-white mb-2">
              <span className="font-bold">Grade:</span> 7.71 CGPA
            </p>
            <p className="text-sm text-zinc-300">
              I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Nitte Meenakshi
              Institute of Technology, Bengaluru, with a CGPA of 7.71 after completing five semesters. My coursework
              includes Data Structures, Algorithms, Object-Oriented Programming, Database Management, and other core
              subjects.
            </p>
          </div>
        </div>
      

        {/* Second Card */}

  {/* Moving Arrow */}
        <div className="relative flex items-center space-x-4 mb-10">
         
          <div className="absolute w-5 h-5 border border-green-600 rounded-full -left-3 z-0"></div>
          <div className="absolute left-[0.25rem] top-0 animate-bounce z-100">
          <div className="w-3 h-3 bg-green-600 rotate-45"></div>
        </div>
          <div className="ml-10 border border-green-600 rounded-lg p-6 bg-zinc-900 shadow-md shadow-green-600 w-full z-10">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="./src/assets/SVPUClogo.png"
                alt="SJM Logo"
                className="w-12 h-12 rounded-md"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Sri Venkataramana PU College Kundapura.
                </h3>
                <p className="text-sm text-zinc-500">Pre-University Course - PCMC</p>
                <p className="text-sm text-zinc-500">Apr 2020 - Apr 2022</p>
              </div>
            </div>
            <p className="text-sm text-white mb-2">
              <span className="font-bold">Grade:</span> 93%
            </p>
            <p className="text-sm text-zinc-300 ">
              Completed my Pre-University Course with PCMC (Physics, Chemistry, Mathematics, and Computer Science) at
              Sri Venkataramana PU College Kundapura, building a strong foundation in science and technology.
            </p>
          </div>
        </div>


        {/* Third Card */}

  {/* Moving Arrow */}
        <div className="relative flex items-center space-x-4">
         
          <div className="absolute w-5 h-5 border border-green-600 rounded-full -left-3 z-0"></div>
          <div className="absolute left-[0.25rem] top-0 animate-bounce z-100">
          <div className="w-3 h-3 bg-green-600 rotate-45"></div>
        </div>
          <div className="ml-10 border border-green-600 rounded-lg p-6 bg-zinc-900 shadow-md shadow-green-600 w-full z-10">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src=".\src\assets\GPUCLogo.jpg"
                alt="SJM Logo"
                className="w-12 h-12 rounded-md"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Government High School Uppunda.
                </h3>
                <p className="text-sm text-zinc-500">SSLC - Secondary School Leaving Certificate</p>
                <p className="text-sm text-zinc-500">June 2020</p>
              </div>
            </div>
            <p className="text-sm text-white mb-2">
              <span className="font-bold">Grade:</span> 85.28%
            </p>
            <p className="text-sm text-zinc-300 ">
            Completed my Secondary School Leaving Certificate (SSLC) at Government High School, Uppunda, 
            where I established a solid academic foundation and developed a keen interest in science and mathematics.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
