import React from "react";
import Banner from "./components/banner";
import Arrow from "~/globalcomponents/arrow";
import Gradient from "~/globalcomponents/gradient";
import Indicator from "~/globalcomponents/pageindicator";

const page = () => {
  return (
    <main>
      <Gradient />
      <Arrow />
      <Indicator />
      <header className="h-screen w-screen relative">
        <Banner />
      </header>
      <section className="h-screen w-screen"></section>
    </main>
  );
};

export default page;
