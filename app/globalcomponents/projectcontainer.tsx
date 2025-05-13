import React from "react";
import Line from "./line";

interface props {
  media: string;
  title: string;
  description: string;
  technology: any;
  weblink: string;
}

const projectcontainer: React.FC<props> = ({
  media,
  title,
  description,
  technology,
  weblink,
}) => {
  const tech = technology;

  return (
    <div className="flex md:flex-row flex-col items-center md:w-[1200px] w-[320px] gap-[20px]">
      <div className="bg-[#ffffff16] text-zinc-2s00 md:w-[700px] w-[320px] rounded-[25px] md:p-8 p-4 overflow-hidden">
        <img src={media} alt="" className="rounded-lg mb-3" />
        <Line />
        <div className="mt-3 flex flex-row gap-2">
          <p className="content font-bold tracking-widest md:w-max w-[90px] md:text-[17px] text-[12px]">
            {title} -
          </p>

          <div className="flex flex-row items-center md:overflow-hidden overflow-scroll gap-3">
            {tech.map((techs: any) => {
              return (
                <img
                  className="h-max w-auto"
                  key={techs.logo}
                  src={`https://img.shields.io/badge/${techs.badge}-${techs.badgeColor}.svg?style=flat&logo=${techs.logo}&logoColor=${techs.badgeColor}&labelColor=e6e6e6`}
                  alt="badge"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex-1 flex-col flex">
        <h1 className="md:mt-5 md:mb-5 mb-2 content text-center w-full md:text-[20px] text-[15px] tracking-widest">
          {title}
        </h1>
        <Line />
        <p className="md:mt-5 mt-2 mx-5 text-justify md:text-[17px] text-[13px]">
          {description}
        </p>
        <a
          href={weblink}
          className="cursor-pointer bg-[#ffffff16] ml-auto mr-5 font-bold hover:scale-105 transition-all duration-150 ease-in-out tracking-widest mt-5 mb-10 py-2 px-10 rounded-lg w-max md:text-lg text-xs"
        >
          Visit Now
        </a>
      </div>
    </div>
  );
};

export default projectcontainer;
