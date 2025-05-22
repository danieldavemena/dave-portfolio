import React from "react";
import { redirect } from "react-router";
import Navigation from "~/globalcomponents/navigation";
import project from "~/globalcomponents/projectsList.json";

const projects = () => {
  return (
    <main>
      <Navigation />
      <img
        className="fixed blur-[140px] transform md:-translate-x-[15vw] md:-translate-y-[20vh] -translate-x-[20vw]   opacity-70"
        src="/images/blob-1.svg"
        alt=""
      />
      <img
        className="fixed blur-[140px] transform md:translate-x-[60vw] md:translate-y-[20vh] translate-x-[20vw] translate-y-[60vh] opacity-70"
        src="/images/blob-2.svg"
        alt=""
      />
      <img
        className="fixed blur-[140px] transform md:translate-x-[5vw] md:translate-y-[35vh] -translate-x-[50vw] translate-y-[40vh] opacity-20"
        src="/images/blob-3.svg"
        alt=""
      />
      <img
        className="fixed blur-[140px] transform md:translate-x-[40vw] md:-translate-y-[40vh] translate-x-[50vw] translate-y-[20vh] opacity-20"
        src="/images/blob-4.svg"
        alt=""
      />

      <div className="md:w-[1200px] w-[360px]   absolute left-1/2 top-30 transform -translate-x-1/2">
        <div className="md:columns-3 columns-1 [&>*:not(:first-child)]:mt-5 ">
          {project.projects.map((data, key) => {
            return (
              <div
                onClick={() => {
                  window.location.href = data.webUrl;
                }}
                key={key}
                className="bg-[#ffffff16] hover:scale-102 cursor-pointer duration-200 transition-all ease-in-out  overflow-hidden  rounded-lg  "
              >
                <div className="overflow-clip h-[200px]  rounded-t-lg">
                  <img src={data.imgUrl} alt="key" />
                </div>
                <div className="p-2">
                  <h2 className="font-bold md:text-[15pt] content">
                    {data.title}
                  </h2>
                  <p className="mt-2 md:text-[13pt] text-[11pt] text-[#ffffffac]">
                    ☆ {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default projects;
