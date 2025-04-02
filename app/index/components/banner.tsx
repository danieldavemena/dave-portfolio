import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const banner = () => {
  return (
    <div className=" banner text-zinc-200 absolute top-1/2 left-1/2 flex flex-col  justify-center  transform -translate-x-1/2 -translate-y-[65%]">
      <p className="select-none content text-[30px] tracking-[7px] ml-auto mr-[15px]">
        portfolio
      </p>
      <p className="select-none tracking-[12px] text-[120pt] -mt-[50px]">
        Daniel Dave
      </p>
      <p className="select-none tracking-[25px] font-outline-2 text-transparent text-[120pt] transform -mt-[105px]">
        Developer
      </p>
      <div className="flex flex-row gap-[40px] -mt-[35px] relative z-10">
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
    </div>
  );
};

export default banner;
