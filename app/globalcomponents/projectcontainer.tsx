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
    <div className="flex md:flex-row flex-col items-center md:w-[1200px] w-[320px] md:gap-[20px] gap-[5px]">
      <a
        href={weblink}
        className="hover:-translate-x-[3px] hover:-translate-y-[3px] transform transition-all ease-in duration-50 md:w-[700px] w-[320px] "
      >
        <img src={media} alt="" className="rounded-lg mb-3" />
      </a>
      <div className="md:flex-1 flex-col flex w-[300px]">
        <h1 className="mt-5 md:mx-5 text-center md:text-left w-full md:text-[25px] text-[20px] font-bold tracking-widest">
          {title}
        </h1>
        <p className="md:mt-5 mt-2 md:mx-5 text-justify md:text-[17px] text-[13px] text-zinc-400">
          {description}
        </p>
        <div className="mb-5 flex  flex-wrap items-center mt-5 mx-5 md:overflow-hidden overflow-scroll md:w-max w-[300px] gap-3 [&>*]:rounded-md">
          {tech.map((techs: any) => {
            return (
              <img
                className="h-max w-auto"
                key={techs.logo}
                src={`https://img.shields.io/badge/${techs.badge}-${techs.badgeColor}.svg?style=for-the-badge&logo=${techs.logo}&logoColor=${techs.badgeColor}&labelColor=e6e6e6`}
                alt="badge"
              />
            );
          })}
        </div>
        {/* <a
          href={weblink}
          className="cursor-pointer bg-[#ffffff16] ml-auto mr-5 font-bold hover:scale-105 transition-all duration-150 ease-in-out tracking-widest mt-5 mb-10 py-2 px-10 rounded-lg w-max md:text-lg text-xs"
        >
          Visit Now
        </a> */}
      </div>
    </div>
  );
};

export default projectcontainer;
