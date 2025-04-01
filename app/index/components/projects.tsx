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
    <div className="flex flex-col justify-center items-center [&>:not(:first-child)]:mt-10 ">
      <ProjectContainer
        media={InstaClone}
        title="Instagram UI Clone"
        description="project description"
        technology={projectOne}
      />
      <ProjectContainer
        media={Pixmeet}
        title="PixMeet"
        description="project description"
        technology={projectTwo}
      />
    </div>
  );
};

export default projects;
