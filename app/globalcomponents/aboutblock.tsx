import React from "react";
import Line from "./line";

const aboutblock = () => {
  return (
    <div className="content flex md:flex-row flex-col  text-zinc-200 md:w-fit items-center w-[1000px] gap-5">
      {/* <div className="  bg-gradient-to-r from-gray-500 to-[#152238] md:col-span-1 md:row-span-2 col-span-2 row-span-1 rounded-xl ">
        <img
          className="md:scale-110 md:mt-3.5 scale-75 -mt-8.5"
          src="/images/Portrait.png"
          alt="Dave"
        />
      </div> */}
      <div className="text-justify md:text-lg text-[13px] bg-[#ffffff16]   rounded-[16px] md:p-13 p-5">
        <div className="flex flex-col md:w-[600px] w-[300px] md:px-[50px] md:py-[20px] px-[20px] py-[10px]">
          <h1 className="banner md:text-8xl text-5xl md:mb-2">Daniel Dave</h1>
          <p className="md:text-[16px] text-[11px] text-zinc-400">
            Hello, I'm Daniel, a Computer Engineer from the Philippines. I build
            modern, scalable web applications using Next.js, Tailwind CSS, and
            Supabase. With a strong focus on both functionality and performance,
            I enjoy turning complex ideas into simple, usable interfaces.
            Whether it's for freelance work or personal projects, I'm all about
            writing clean code that does the job right.
          </p>
        </div>
      </div>
      <div className="md:w-[450px] w-[350px] md:justify-start justify-center md:-ml-[50px] flex contain gap-2 flex-wrap md:[&>*]:h-[40px] [&>*]:h-[25px] [&>*]:rounded-[10px] [&>*]:hover:-translate-x-[3px] [&>*]:hover:-translate-y-[3px] [&>*]:transform transition-all [&>*]:ease-in [&>*]:duration-50">
        <img
          src="https://img.shields.io/badge/NextJs-black.svg?style=for-the-badge&logo=Next.js&logoColor=white&labelColor=000000"
          alt="badge"
        />
        <img
          src="https://img.shields.io/badge/firebase-FFA712.svg?style=for-the-badge&logo=firebase&logoColor=white"
          alt="badge"
        />
        <img
          src="https://img.shields.io/badge/Tailwind-06b6d4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=ffffff&labelColor=06b6d4"
          alt="badge"
        />
        <img
          src="https://img.shields.io/badge/HTML-e34f26.svg?style=for-the-badge&logo=HTML5&logoColor=ffffff&labelColor=e34f26"
          alt="badge"
        />
        <img
          src="https://img.shields.io/badge/CSS-1572b6.svg?style=for-the-badge&logo=CSS3&logoColor=ffffff&labelColor=1572b6"
          alt="badge"
        />
        <img
          src="https://img.shields.io/badge/JAVAscript-68603c.svg?style=for-the-badge&logo=JavaScript&logoColor=ffffff&labelColor=68603c"
          alt="badge"
        />
        <img
          src="https://img.shields.io/badge/figma-3da9b8.svg?style=for-the-badge&logo=Figma&logoColor=ffffff&labelColor=3da9b8"
          alt="badge"
        />
        <img
          src="https://img.shields.io/badge/PHP-777bb4.svg?style=for-the-badge&logo=PHP&logoColor=ffffff&labelColor=777bb4"
          alt="badge"
        />
        <img
          src="https://img.shields.io/badge/mysql-4479a1.svg?style=for-the-badge&logo=MySQL&logoColor=ffffff&labelColor=4479a1"
          alt="badge"
        />
        <img
          src="https://img.shields.io/badge/linux-5a5a58.svg?style=for-the-badge&logo=Linux&logoColor=ffffff&labelColor=5a5a58"
          alt="badge"
        />

        <img
          src="https://img.shields.io/badge/git-f05032.svg?style=for-the-badge&logo=Git&logoColor=ffffff&labelColor=f05032"
          alt="badge"
        />
      </div>
      {/* <div className="md:col-span-2 row-span-1 col-span-2">
        <Line />
        <p className="md:mt-2 mt-5 font-bold tracking-widest text-center md:text-[20px] text-[16px]">
          Education
        </p>
        <div className="md:mx-2 mt-3 md:text-[17px] text-[13px]">
          <div className="flex flex-row w-full">
            <p>Sumulong College of Arts and Sciences</p>
            <div className="text-right mr-0 ml-auto text-zinc-400 ">
              <p>Senior High School</p>
              <p>STEM</p>
            </div>
          </div>
          <div className="flex flex-row w-full mt-2">
            <p>University of Rizal System</p>
            <div className="text-right mr-0 ml-auto text-zinc-400 ">
              <p>Undergraduate</p>
              <p>BS Computer Engineering</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default aboutblock;
