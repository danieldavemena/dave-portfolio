import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const banner = () => {
  return (
    <div className=" banner md:mt-0 -mt-10 text-zinc-200 absolute top-1/2 left-1/2 flex flex-col  justify-center  transform -translate-x-1/2 -translate-y-[65%]">
      <p className="select-none content md:text-[30px] md:tracking-[7px] ml-auto md:mr-[15px] text-[20px] tracking-[2px]">
        portfolio
      </p>
      <p className="select-none md:tracking-[12px] md:text-[120pt] md:-mt-[50px] text-[45pt] -mt-[10px]">
        Daniel Dave
      </p>
      <p className="select-none md:tracking-[25px] tracking-[4px] md:font-outline-2 font-outline-1 text-transparent md:text-[120pt] transform md:-mt-[105px] text-[45pt] -mt-[30px]">
        Developer
      </p>
      <div
        id="links"
        className="md:flex hidden flex-row gap-[40px] -mt-[35px] relative z-10"
      >
        <a href="https://github.com/danieldavemena">
          <FontAwesomeIcon fontSize="40px" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/daniel-dave-me%C3%B1a-0b9286210/">
          <FontAwesomeIcon fontSize="40px" icon={faLinkedin} />
        </a>
        <a href="mailto:danieldanieldanieldave@gmail.com">
          <FontAwesomeIcon fontSize="40px" icon={faEnvelope} />
        </a>
      </div>
      <div
        id="links"
        className="flex md:hidden flex-row gap-[20px] -mt-[15px] relative z-10"
      >
        <a href="https://github.com/danieldavemena">
          <FontAwesomeIcon fontSize="30px" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/daniel-dave-me%C3%B1a-0b9286210/">
          <FontAwesomeIcon fontSize="30px" icon={faLinkedin} />
        </a>
        <a href="mailto:danieldanieldanieldave@gmail.com">
          <FontAwesomeIcon fontSize="30px" icon={faEnvelope} />
        </a>
      </div>
    </div>
  );
};

export default banner;
