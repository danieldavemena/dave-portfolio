import React from "react";
import Banner from "./components/banner";
import Arrow from "~/globalcomponents/arrow";
import Gradient from "~/globalcomponents/gradient";
import Indicator from "~/globalcomponents/pageindicator";
import About from "./components/about";
import Projects from "./components/projects";
import Line from "~/globalcomponents/line";

const page = () => {
  return (
    <main>
      <Gradient />
      <Arrow />
      <Indicator />
      <header id="home-section" className="h-screen w-screen relative">
        <Banner />
      </header>
      <section
        id="about-section"
        className="h-screen w-screen relative [&>*]:hover:scale-102 [&>*]:transition-all [&>*]:duration-150 [&>*]:ease-in-out"
      >
        <About />
      </section>
      <section
        id="projects-section"
        className="w-screen relative h-auto my-50 "
      >
        <div className="mt-15"></div>
        <Projects />
      </section>
    </main>
  );
};

export default page;
