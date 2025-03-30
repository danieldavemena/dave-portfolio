import React from "react";
import Line from "./line";

const aboutblock = () => {
  return (
    <div className="about-block content grid grid-cols-3 grid-rows-3 [&>*]:m-2 bg-[#ffffff16] text-zinc-200 w-[1000px] h-[600px] rounded-[25px] p-10">
      <p className="col-span-1 bg-amber-300 row-span-2 "></p>
      <p className="text-justify text-lg col-span-2 ">
        Greeting! My name Daniel Dave Meña. A developer based in the
        Philippines. I specialize in building scalable, high-performance web
        applications that prioritize efficiency, usability, and maintainability.
        My approach focuses on clean, efficient code, seamless user experiences,
        and architectures that handle scale without compromising performance.
      </p>
      <div className="col-span-2  row-span-2">
        <Line />
        <p className="mt-2 font-bold tracking-widest text-center text-[20px]">
          Education
        </p>
        <div className="mx-2 mt-3 ">
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
