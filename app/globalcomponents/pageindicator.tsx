import React, { useEffect, useState } from "react";

const pageindicator = () => {
  const [pageOne, setPageOne] = useState("bg-[#152238]");
  const [pageTwo, setPageTwo] = useState("bg-[#e2e2e22f]");
  const [pageThree, setPageThree] = useState("bg-[#e2e2e22f]");

  const pageScroll = (scroll: any) => {
    window.scrollTo({
      top: scroll,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    var sectionOne = document
      .getElementById("home-section")
      ?.getBoundingClientRect().bottom;

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
        window.innerHeight - sectionOne >= -1 &&
        window.innerHeight - sectionOne < window.innerHeight / 10
      ) {
        setPageOne("bg-[#152238]");
      } else {
        setPageOne("bg-[#e2e2e22f]");
      }

      if (
        sectionTwo !== undefined &&
        window.innerHeight - sectionTwo > 10 &&
        window.innerHeight - sectionTwo < window.innerHeight * 1.1
      ) {
        setPageTwo("bg-[#152238]");
      } else {
        setPageTwo("bg-[#e2e2e22f]");
      }

      if (
        sectionThree !== undefined &&
        window.innerHeight - sectionThree > (window.innerHeight / 6) * -1
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
    <div className="z-10 [&>*]:cursor-pointer  flex flex-col md:gap-8 gap-6 items-center justify-center fixed top-1/2 transform -translate-y-1/2 md:right-[39px] right-[10px] md:py-8 py-4 w-[20px] rounded-full md:w-[30px] bg-[#ffffff16] [&>*]:transition-all [&>*]:duration-150 [&>*]:ease-in-out">
      <div
        className={`md:size-[12px] size-[9px] ${pageOne} transform  rounded-full`}
        onClick={() => pageScroll(0)}
      ></div>
      <div
        className={`md:size-[12px] size-[9px] ${pageTwo}  rounded-full`}
        onClick={() => pageScroll(window.innerHeight)}
      ></div>
      <div
        className={`md:size-[12px] size-[9px] ${pageThree}  rounded-full`}
        onClick={() => pageScroll(window.innerHeight * 2)}
      ></div>
    </div>
  );
};

export default pageindicator;
