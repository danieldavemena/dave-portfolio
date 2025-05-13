import React from "react";
import Line from "./line";

const aboutblock = () => {
  return (
    <div className="content grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3 [&>*]:m-2 bg-[#ffffff16] text-zinc-200 md:w-[1000px] md:h-[450px] w-[300px] h-[700px] rounded-[25px] md:p-10 p-5">
      <div className="  bg-gradient-to-r from-gray-500 to-[#152238] md:col-span-1 md:row-span-2 col-span-2 row-span-1 rounded-xl ">
        <img
          className="md:scale-110 md:mt-3.5 scale-75 -mt-8.5"
          src="/images/Portrait.png"
          alt="Dave"
        />
      </div>
      <p className="text-justify md:text-lg text-[13px]  md:col-span-2 col-span-2 row-span-1 ">
        Greeting! My name Daniel Dave Meña. A developer based in the
        Philippines. I specialize in building scalable, high-performance web
        applications that prioritize efficiency, usability, and maintainability.
        My approach focuses on clean, efficient code, seamless user experiences,
        and architectures that handle scale without compromising performance.
      </p>
      <div className="md:col-span-2 row-span-1 col-span-2">
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
      </div>
    </div>
  );
};

export default aboutblock;
