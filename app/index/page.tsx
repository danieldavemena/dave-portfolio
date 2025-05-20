import React from "react";
import Banner from "./components/banner";
import Arrow from "~/globalcomponents/arrow";
import About from "./components/about";
import Projects from "./components/projects";
import Navigation from "~/globalcomponents/navigation";

const page = () => {
  return (
    <main>
      <Navigation />
      <img
        className="fixed blur-[140px] transform md:-translate-x-[15vw] md:-translate-y-[20vh] -translate-x-[20vw]   opacity-70"
        src="/images/blob-1.svg"
        alt=""
      />
      <img
        className="fixed blur-[140px] transform md:translate-x-[60vw] md:translate-y-[20vh] translate-x-[20vw] translate-y-[60vh] opacity-70"
        src="/images/blob-2.svg"
        alt=""
      />
      <img
        className="fixed blur-[140px] transform md:translate-x-[5vw] md:translate-y-[35vh] -translate-x-[50vw] translate-y-[40vh] opacity-20"
        src="/images/blob-3.svg"
        alt=""
      />
      <img
        className="fixed blur-[140px] transform md:translate-x-[40vw] md:-translate-y-[40vh] translate-x-[50vw] translate-y-[20vh] opacity-20"
        src="/images/blob-4.svg"
        alt=""
      />
      <Arrow />
      <header id="home-section" className="h-screen w-screen relative">
        <Banner />
      </header>
      <section id="about-section" className="h-screen w-screen relative ">
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
