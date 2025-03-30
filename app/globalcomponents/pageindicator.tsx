import React from "react";

const pageindicator = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center fixed top-1/2 transform  -translate-y-1/2 right-[39px] py-8 rounded-full w-[30px] bg-[#ffffff16]">
      <div className="size-[12px] bg-[#152238] rounded-full"></div>
      <div className="size-[12px] bg-[#e2e2e22f] rounded-full"></div>
      <div className="size-[12px] bg-[#e2e2e22f] rounded-full"></div>
    </div>
  );
};

export default pageindicator;
