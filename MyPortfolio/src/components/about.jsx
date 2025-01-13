import React from "react";

function About() {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-6 lg:p-8 mt-11">
      {/* Right side: Profile Photo (comes first on mobile) */}
      <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mt-6 lg:mt-0">
        <div className="relative rounded-full">
          {/* Animated Border */}
          <div className="profile-border-animation rounded-full absolute inset-0"></div>
          {/* Static Profile Photo */}
          <img
            src="https://res.cloudinary.com/dtyu88isr/image/upload/v1736177698/yprajq5zrmp3otox3pre.png"
            alt="Shresha's Profile"
            className="rounded-full w-49 h-49 lg:w-49 lg:h-49 object-cover shadow-lg relative"
          />
        </div>
      </div>

      {/* Left side: Name and Description */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mt-2">
          Hello! I am
        </h1>
        <h1 className="text-3xl lg:text-4xl font-bold text-white mt-2">
          Shresha Acharya
        </h1>
        <div className="textAnimation">
          <div className="wrapper flex flex-col lg:flex-row items-center">
            <h1 className="static-txt text-white">I am a</h1>
            <ul className="dynamic-txts ml-2 lg:ml-3">
              <li>
                <span>Fullstack Developer</span>
              </li>
              <li>
                <span>Programmer</span>
              </li>
              <li>
                <span>Problem Solver</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-lg lg:text-xl text-white">
          I am a passionate and adaptable individual, constantly driven by the
          desire to learn and grow. With a commitment to excellence and a
          proactive approach, I strive to deliver impactful results in every
          endeavor. Guided by a positive attitude and a growth mindset, I am
          ready to embrace challenges, contribute meaningfully, and make a
          lasting impact.
        </p>

        {/* Resume Button */}
        <div className="mt-6 flex flex-wrap justify-center lg:justify-start w-full space-y-4 lg:space-y-2">
          <a
            href="/path-to-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shiny-button bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg transition-all relative"
          >
            Check Resume
          </a>
          {/* Social Media Icons */}
          <div className=" flex w-full  lg:w-auto justify-center  space-x-4  lg:ml-3">
            <a
              href="https://github.com/shresha2004"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon  bg-green-600 hover:bg-green-600"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shresha-acharya-116318261/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon icon-border bg-zinc-800 hover:bg-green-600"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="   w-7 h-7 mt-1 ml-1"
              />
            </a>
            <a
              href="https://leetcode.com/u/shreshacharya/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon icon-border bg-zinc-800 hover:bg-green-600"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="w-8 h-8 mt-1"
              />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/shreshacm2f7/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon icon-border bg-zinc-800 hover:bg-green-600"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                alt="GFG"
                className="w-8 h-8 mt-1 ml-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
