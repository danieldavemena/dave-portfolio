import React from "react";
import ProjectContainer from "~/globalcomponents/projectcontainer";
import InstaClone from "../../../public/images/instagram-clone-preview.png";
import Pixmeet from "../../../public/images/pixmeet-preview.png";

const projects = () => {
  const projectOne = [
    {
      badge: "NextJS",
      logo: "Next.js",
      badgeColor: "000000",
    },
    {
      badge: "Tailwind",
      logo: "Tailwind-CSS",
      badgeColor: "06b6d4",
    },
  ];

  const projectTwo = [
    {
      badge: "HTML",
      logo: "HTML5",
      badgeColor: "E34F26",
    },
    {
      badge: "Javascript",
      logo: "JavaScript",
      badgeColor: "F7DF1E",
    },
    {
      badge: "CSS",
      logo: "CSS3",
      badgeColor: "1572B6",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center [&>:not(:first-child)]:mt-[200px] ">
      <ProjectContainer
        media={InstaClone}
        title="Instagram UI Clone"
        description="This is a pixel-perfect Instagram UI clone built with Next.js and Tailwind CSS, designed to replicate the look and feel of the original platform with smooth performance and responsiveness. Leveraging Next.js for fast rendering and Tailwind CSS for modern styling, this project showcases dynamic UI components, a sleek layout, and an optimized user experience. "
        technology={projectOne}
        weblink="https://instagram-clone-by-dave.vercel.app/"
      />
      <ProjectContainer
        media={Pixmeet}
        title="PixMeet"
        description="Pixmeet is a pixel art-themed chatroom where users can interact in a retro-inspired virtual space. Built with HTML, CSS, and JavaScript, this project blends real-time chat with character movement controls, allowing users to navigate the room as pixel avatars."
        technology={projectTwo}
        weblink="https://pixmeet.netlify.app/"
      />
    </div>
  );
};

export default projects;
