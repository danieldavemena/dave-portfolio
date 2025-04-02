import React, { useEffect, useState } from "react";

const pageindicator = () => {
  const [pageOne, setPageOne] = useState("bg-[#152238]");
  const [pageTwo, setPageTwo] = useState("bg-[#e2e2e22f]");
  const [pageThree, setPageThree] = useState("bg-[#e2e2e22f]");

  useEffect(() => {
    var sectionOne = document
      .getElementById("home-section")
      ?.getBoundingClientRect().bottom;

    console.log(sectionOne);

    var sectionTwo = document
      .getElementById("about-section")
      ?.getBoundingClientRect().top;

    var sectionThree = document
      .getElementById("projects-section")
      ?.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
      sectionOne = document
        .getElementById("home-section")
        ?.getBoundingClientRect().bottom;

      sectionTwo = document
        .getElementById("about-section")
        ?.getBoundingClientRect().top;

      sectionThree = document
        .getElementById("projects-section")
        ?.getBoundingClientRect().top;

      trigger();
    });

    const trigger = () => {
      if (
        sectionOne !== undefined &&
        window.innerHeight - sectionOne >= 0 &&
        window.innerHeight - sectionOne < window.innerHeight / 10
      ) {
        console.log(window.innerHeight - sectionOne);
        setPageOne("bg-[#152238]");
      } else {
        setPageOne("bg-[#e2e2e22f]");
      }

      if (
        sectionTwo !== undefined &&
        window.innerHeight - sectionTwo > 10 &&
        window.innerHeight - sectionTwo < window.innerHeight
      ) {
        setPageTwo("bg-[#152238]");
      } else {
        setPageTwo("bg-[#e2e2e22f]");
      }

      if (
        sectionThree !== undefined &&
        window.innerHeight - sectionThree > (window.innerHeight / 2) * -1
      ) {
        setPageThree("bg-[#152238]");
      } else {
        setPageThree("bg-[#e2e2e22f]");
      }
    };

    trigger();

    return window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center justify-center fixed top-1/2 transform  -translate-y-1/2 right-[39px] py-8 rounded-full w-[30px] bg-[#ffffff16] [&>*]:transition-all [&>*]:duration-150 [&>*]:ease-in-out">
      <div className={`size-[12px] ${pageOne}  rounded-full`}></div>
      <div className={`size-[12px] ${pageTwo}  rounded-full`}></div>
      <div className={`size-[12px] ${pageThree}  rounded-full`}></div>
    </div>
  );
};

export default pageindicator;
