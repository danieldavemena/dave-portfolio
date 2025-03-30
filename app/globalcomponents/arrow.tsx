import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const arrow = () => {
  return (
    <div className="animate-bounce bg-[#ffffff16] cursor-pointer flex items-center justify-center size-[65px] rounded-[20px] fixed left-1/2 bottom-[39px] transform -translate-x-1/2 ">
      <FontAwesomeIcon color="#e2e2e22f" fontSize="27px" icon={faArrowDown} />
    </div>
  );
};

export default arrow;
