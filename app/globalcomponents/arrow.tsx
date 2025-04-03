import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const arrow = () => {
  const [state, setState] = useState(
    "scroll-down animate-bounce  right-1/2 translate-x-1/2"
  );

  useEffect(() => {
    var signal = document
      .getElementById("home-section")
      ?.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
      signal = document
        .getElementById("home-section")
        ?.getBoundingClientRect().top;

      trigger();
    });

    const trigger = () => {
      if (signal !== undefined && signal < 0) {
        setState("scroll-up right-[39px] rotate-540");
      } else {
        setState("scroll-down animate-bounce  right-1/2 translate-x-1/2");
      }
    };

    trigger();

    return window.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    document.querySelector(".scroll-up")?.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    document.querySelector(".scroll-down")?.addEventListener("click", () => {
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: "smooth",
      });
    });
  });

  return (
    <div
      id="arrow"
      className={`z-10 bg-[#ffffff16] cursor-pointer flex items-center transform justify-center size-[65px] rounded-[20px] transition-all ease-in-out duration-300 fixed  bottom-[39px] ${state}`}
    >
      <FontAwesomeIcon color="#e2e2e22f" fontSize="27px" icon={faArrowDown} />
    </div>
  );
};

export default arrow;
