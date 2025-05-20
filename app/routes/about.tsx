import React, { useEffect, useState } from "react";
import Navigation from "../globalcomponents/navigation";

const about = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  async function QuoteGen() {
    const url =
      "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "6170798670msh8dd996909eb5a12p1dfee3jsn1909fd2ef03a",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setQuote(result.content);
      setAuthor(`— ${result.originator.name}`);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    QuoteGen();
  }, [0]);
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

      <div className="md:w-[1000px] w-[360px] absolute left-1/2 top-30 transform -translate-x-1/2">
        <section className=" md:h-[250px] border-4 border-[#2b2c2d] overflow-hidden  h-[160px] rounded-xl">
          <img className="w-full  " src="/images/cover.gif" alt="" />
          <div className="rounded-full md:size-[200px] size-[90px] bg-[#231d30] overflow-hidden z-1  absolute md:top-42 top-34 md:left-12 left-8">
            <img src="/images/Portrait.png" alt="" />
          </div>
          <div className="rounded-full md:size-[210px] size-[100px]  bg-gradient-to-tr from-yellow-300 via-purple-400 to-red-500 overflow-hidden  absolute md:top-40.75 top-32.75 md:left-10.75 left-6.75"></div>
          <div className="  absolute md:top-64 top-42 md:left-[280px] left-[145px] content">
            <h1 className="md:text-[34pt] text-[15pt] font-bold bg-gradient-to-tr from-yellow-300 via-purple-400 to-red-500 text-transparent bg-clip-text">
              DANIEL DAVE MEÑA
            </h1>
            <p className="md:text-lg text-xs text-zinc-400">
              Developer | Artist | Musician{" "}
            </p>
          </div>
        </section>
        <section className="md:mt-[200px] mt-[120px] ">
          <div className=" flex md:flex-row flex-col gap-7">
            <div className="bg-[#ffffff16] p-7 rounded-xl  md:w-[35%]">
              <h2 className="md:text-xl text-md font-bold">About me</h2>
              <p className="ml-3 mt-5 md:text-lg text-sm text-[#d3d3d3]">
                Musician at heart, coder by passion — I create with both strings
                and scripts
              </p>

              <h2 className="md:text-xl text-md font-bold mt-8">Education</h2>
              <p className="ml-3 mt-5 md:text-lg text-sm text-[#d3d3d3]">
                📚 Studied at{" "}
                <i className="font-semibold"> University of Rizal System</i>
              </p>
              <p className="ml-3 mt-3 md:text-lg text-sm text-[#d3d3d3] ">
                📚 Studied at{" "}
                <i className="font-semibold">
                  {" "}
                  Sumulong College of Arts and Sciences
                </i>
              </p>

              <h2 className="md:text-xl text-md font-bold mt-8">Hobbies</h2>
              <p className="ml-3 mt-5 md:text-lg text-sm text-[#d3d3d3]">
                🎵 Singing & Instruments
              </p>
              <p className="ml-3 mt-3 md:text-lg text-sm text-[#d3d3d3]">
                🖍️ Multimedia Arts
              </p>
              <p className="ml-3 mt-3 md:text-lg text-sm text-[#d3d3d3]">
                💻 Programming
              </p>
            </div>
            <div className="md:text-xl text-md font-bold flex flex-col gap-7 flex-1">
              <div className=" bg-[#ffffff16] p-7  rounded-xl ">
                <h2 className="md:text-xl text-md font-bold">Photos</h2>
                <div
                  style={{ scrollbarWidth: "none" }}
                  className="mt-5 [&>*]:h-[200px] overflow-x-scroll gap-6 flex flex-row  [&>*]:rounded-lg"
                >
                  <img className="" src="/images/1.jpg" alt="" />
                  <img className="" src="/images/3.jpg" alt="" />
                  <img className="" src="/images/2.jpg" alt="" />
                  <img className="" src="/images/4.jpg" alt="" />
                </div>
              </div>
              <div className=" bg-[#ffffff16] p-7 flex  rounded-xl flex-1">
                <div className="flex flex-col gap-5 items-center justify-center text-center flex-1">
                  <p className="font-normal">
                    <i>{quote}</i>
                  </p>
                  <p className="mr-0 ml-auto">{author}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[80px]"></div>
        </section>
      </div>
    </main>
  );
};

export default about;
