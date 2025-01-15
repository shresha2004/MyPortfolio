import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaPython, FaJava, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMysql, SiMongodb, SiC, SiCplusplus } from "react-icons/si";

const Skills=()=>{
    return(
        <>
     <h1 className="text-white justify-center text-center font-bold text-2xl lg:3xl underline underline-offset-2">Skills</h1>
     
     <div className="mt-2 text-white text-center font-semibold max-w-s mx-auto">I have a solid foundation in programming and web technologies, 
        with experience in <br/> building robust applications and exploring innovative solutions.</div>
          {/* Programming Languages */}
          <div className="justify-center text-center mt-10">
  <div className=" p-6 rounded-lg  border border-green-600 shadow-2xl shadow-green-600 w-full sm:w-96 mx-auto">
    <h3 className="text-xl text-center font-bold text-white mb-4">Core Programming Languages</h3>
    <div className="flex flex-wrap gap-4 grid grid-cols-2">
      <span className="flex items-center text-center gap-2   px-4 py-2 rounded-md font-medium  border border-green-600">
        <SiC size={20}  className="text-blue-600" /> <span className="text-zinc-300"> C </span>
      </span>
      <span className="flex items-center gap-2   px-4 py-2 rounded-md font-medium border border-green-600">
        <SiCplusplus size={20} className="text-blue-600" /><span className="text-zinc-300"> C++ </span>
      </span>
      <span className="flex items-center gap-2 bg-[#2C2C2C]  px-4 py-2 rounded-md font-medium border border-green-600 ">
        <FaJava size={20} className="text-orange-600" /> <span className="text-zinc-300">Java </span>
      </span>
      <span className="flex items-center gap-2  px-4 py-2 rounded-md font-medium border border-green-600">
        <FaPython size={20} className="text-yellow-200" /> <span className="text-zinc-300">Python</span>
      </span>
      </div>
      
      <span className="flex justify-center text-center items-center max-w-40  gap-2 bg-[#2C2C2C] mt-4 px-4 py-2 rounded-md font-medium border  mx-auto border-green-600">
        <SiJavascript size={20}  className="text-yellow-400" /> <span className="text-zinc-300">Java Script</span>
      </span>
     
    
  </div>
</div>

          <div className="justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 ">

          {/* Frontend Section */}
          <div className="justify-center text-center mt-10">
  <div className=" p-6 rounded-lg  border border-green-600 shadow-2xl shadow-green-600 w-full sm:w-96 mx-auto">
    <h3 className="text-xl text-center font-bold text-white mb-4">Frontend</h3>
    <div className="flex flex-wrap gap-4 grid grid-cols-2">
      <span className="flex items-center text-center gap-2   px-4 py-2 rounded-md font-medium  border border-green-600">
        <FaHtml5 size={20}  className="text-red-600" /> <span className="text-zinc-300"> HTML </span>
      </span>
      <span className="flex items-center gap-2   px-4 py-2 rounded-md font-medium border border-green-600">
        <FaCss3Alt size={20} className="text-blue-500" /><span className="text-zinc-300"> CSS </span>
      </span>
      <span className="flex items-center gap-2 bg-[#2C2C2C]  px-4 py-2 rounded-md font-medium border border-green-600 ">
        <FaReact size={20} className="text-blue-300" /> <span className="text-zinc-300">ReactJS </span>
      </span>
      <span className="flex items-center gap-2  px-4 py-2 rounded-md font-medium border border-green-600">
        <FaBootstrap size={20} className="text-blue-600" /> <span className="text-zinc-300">Bootstrap</span>
      </span>
      </div>
      
      <span className="flex  justify-center text-center items-center max-w-40 mx-auto gap-2 mt-4 px-4 py-2 rounded-md font-medium border  border-green-600">
  <SiTailwindcss size={20} className="text-blue-400" /> 
  <span className="text-zinc-300">Tailwind CSS</span>
</span>

     
    
  </div>
</div>

          {/* Backend Section */}
          <div className="justify-center text-center mt-10">
  <div className=" p-6 rounded-lg  border border-green-600 shadow-2xl shadow-green-600 w-full sm:w-96 mx-auto">
    <h3 className="text-xl text-center font-bold text-white mb-4">Backend</h3>
    <div className="flex flex-wrap gap-4 grid grid-cols-2">
    <span className="flex items-center gap-2   px-4 py-2 rounded-md font-medium border border-green-600">
        <FaNodeJs size={20} className="text-green-500" /><span className="text-zinc-300"> NodeJS </span>
      </span>
      <span className="flex items-center text-center gap-2   px-4 py-2 rounded-md font-medium  border border-green-600">
      <img
        src="https://res.cloudinary.com/dtyu88isr/image/upload/v1736751254/MyPortfolio/lvwhssixpy2mrzhjuvjg.png"
        alt="Logo"
        className="w-6 h-6 rounded-full"
      />  <span className="text-zinc-300">ExpressJS</span>
      </span>
      
      <span className="flex items-center gap-2 bg-[#2C2C2C]  px-4 py-2 rounded-md font-medium border border-green-600 ">
        <SiMongodb size={20} className="text-green-600" /> <span className="text-zinc-300">MongoDB </span>
      </span>
      <span className="flex items-center gap-2  px-4 py-2 rounded-md font-medium border border-green-600">
        <SiMysql size={20} className="bg-white rounded-md text-blue-600" /> <span className="text-zinc-300">My SQL</span>
      </span>
      </div>
      
      <span className="flex  justify-center text-center items-center max-w-40 mx-auto gap-2 mt-4 px-4 py-2 rounded-md font-medium border  border-green-600">
      <img
        src="https://res.cloudinary.com/demo/image/upload/v1632341230/cloudinary_icon.png"
        alt="Cloudinary"
        className="w-6 h-6"
      />  <span className="text-zinc-300">Cloundinary</span>
</span>

     
    
  </div>
</div>
</div>
      {/*Others */}
      <div className="justify-center text-center mt-10 mb-6">
  <div className=" p-6 rounded-lg  border border-green-600 shadow-2xl shadow-green-600 w-full sm:w-96 mx-auto">
    <h3 className="text-xl text-center font-bold text-white mb-4">Configeration Tools</h3>
    <div className="flex flex-wrap gap-4 grid grid-cols-2">
      <span className="flex items-center text-center gap-2   px-4 py-2 rounded-md font-medium  border border-green-600">
      <img
        src="https://res.cloudinary.com/dtyu88isr/image/upload/v1736751255/MyPortfolio/x7q3bvonlai0t3kqkw8m.png"
        alt="Cloudinary"
        className="w-5 h-5"
      />  <span className="text-zinc-300"> Git </span>
      </span>
      <span className="flex items-center gap-2   px-4 py-2 rounded-md font-medium border border-green-600">
        <FaGithub size={20} className="text-white bg-black rounded-full" /><span className="text-zinc-300"> GitHub </span>
      </span>
      <span className="flex items-center gap-2 bg-[#2C2C2C]  px-4 py-2 rounded-md font-medium border border-green-600 ">
      <img
        src="https://res.cloudinary.com/dtyu88isr/image/upload/v1736751257/MyPortfolio/lpizbzvvvx6nlnuex9hn.svg"
        alt="Cloudinary"
        className="w-5 h-5"
      /> <span className="text-zinc-300">VS Code </span>
      </span>
      <span className="flex items-center gap-2  px-4 py-2 rounded-md font-medium border border-green-600">
        <img
        src="https://res.cloudinary.com/dtyu88isr/image/upload/v1736751254/MyPortfolio/yezqu3oa1pm7zodj303i.png"
        alt="Image"
        className="w-5 h-5 rounded-full"/> <span className="text-zinc-300">Eclipse</span>
      </span>
      </div>
      
      <span className="flex justify-center text-center items-center max-w-40  gap-4 bg-[#2C2C2C] mt-4 px-4 py-2 rounded-md font-medium border  mx-auto border-green-600">
      <img
        src="https://res.cloudinary.com/dtyu88isr/image/upload/v1736751256/MyPortfolio/z69wmkdtcasjmjdagseu.png"
        alt="Image"
        className="w-5 h-5 rounded-full"/> <span className="text-zinc-300">Postman</span>
      </span>
     
    
  </div>
</div>
</div>
          
        
        </>
    )
}

export default Skills;