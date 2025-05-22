import React, { useEffect, useState } from "react";

const navigation = () => {
  var y = 0;
  const [hide, setHide] = useState("mt-15");

  const handleNavigation = (e: any) => {
    const window = e.currentTarget;
    if (y > window.scrollY && hide == "-mt-30") {
      setHide("mt-15");
    } else if (y < window.scrollY && hide == "mt-15") {
      setHide("-mt-30");
    }
    y = window.scrollY;
  };

  useEffect(() => {
    y = window.scrollY;
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [handleNavigation]);

  return (
    <div
      className={`fixed flex items-center justify-center ${hide} transition-all ease-in-out duration-300 left-1/2 transform -translate-x-1/2 z-10`}
    >
      <nav className="absolute flex flex-row justify-center  md:text-xl text-md font-bold bg-[#090c11] md:w-[280px] w-[220px] md:h-[45px] h-[30px] text-[#ffffff92] z-11   rounded-full gap-5 items-center ">
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="projects">Projects</a>
      </nav>
      <div className="absolute  bg-gradient-to-tr from-purple-500 to-blue-500 md:w-[285px] w-[225px] md:h-[50px] h-[35px]  rounded-full"></div>
    </div>
  );
};

export default navigation;
