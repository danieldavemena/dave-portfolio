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
    <div className="flex flex-row w-[1200px] gap-[20px]">
      <div className="bg-[#ffffff16] text-zinc-2s00 w-[700px] rounded-[25px] p-8 overflow-hidden">
        <img src={media} alt="" className="rounded-lg mb-3" />
        <Line />
        <div className="mt-3 flex flex-row gap-2">
          <p className="content font-bold tracking-widest text-[17px]">
            {title} -
          </p>

          <div className="flex flex-row  gap-3">
            {tech.map((techs: any) => {
              return (
                <img
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
        <h1 className="mt-5 mb-5 content text-center w-full text-[20px] tracking-widest">
          {title}
        </h1>
        <Line />
        <p className="mt-5 mx-5 text-justify text-[17px]">{description}</p>
        <a
          href={weblink}
          className="cursor-pointer bg-[#ffffff16] ml-auto mr-5 font-bold hover:scale-105 transition-all duration-150 ease-in-out tracking-widest mt-auto mb-10 py-2 px-10 rounded-lg w-max"
        >
          Visit Now
        </a>
      </div>
    </div>
  );
};

export default projectcontainer;
