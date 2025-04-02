import React, { useEffect, useState } from "react";

const pageindicator = () => {
  const [pageOne, setPageOne] = useState("bg-[#152238]");
  const [pageTwo, setPageTwo] = useState("bg-[#152238]");
  const [pageThree, setPageThree] = useState("bg-[#152238]");

  useEffect(() => {
    var sectionOne = document
      .getElementById("home-section")
      ?.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
      sectionOne = document
        .getElementById("home-section")
        ?.getBoundingClientRect().top;

      trigger();
    });

    const trigger = () => {
      if (signal !== undefined && signal < 0) {
        setState("right-[39px] rotate-540");
      } else {
        setState("animate-bounce  right-1/2 translate-x-1/2");
      }
    };

    trigger();

    return window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center justify-center fixed top-1/2 transform  -translate-y-1/2 right-[39px] py-8 rounded-full w-[30px] bg-[#ffffff16]">
      <div className={`size-[12px] ${pageOne}  rounded-full`}></div>
      <div className={`size-[12px] ${pageOne}  rounded-full`}></div>
      <div className="size-[12px] bg-[#e2e2e22f] rounded-full"></div>
    </div>
  );
};

export default pageindicator;
