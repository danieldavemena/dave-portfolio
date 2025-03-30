import React from "react";
import Banner from "./components/banner";
import Arrow from "~/globalcomponents/arrow";
import Gradient from "~/globalcomponents/gradient";
import Indicator from "~/globalcomponents/pageindicator";
import About from "./components/about";

const page = () => {
  return (
    <main>
      <Gradient />
      <Arrow />
      <Indicator />
      <header className="h-screen w-screen relative">
        <Banner />
      </header>
      <section className="h-screen w-screen relative">
        <About />
      </section>
    </main>
  );
};

export default page;
