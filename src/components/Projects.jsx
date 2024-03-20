import React, { useState } from "react";

const Projects = () => {
  return (
    <div className="w-full h-fit p-10" id="projects-section">
      <div className="projects-top w-full h-full">
        <h2 className="text-2xl text-yellow-400">Our Projects</h2>
        <p className="text-lg font-normal leading-snug lg:w-1/2 mt-5">
          we take pride in our track record of successful projects across
          various industries. Our experienced team has been involved in a wide
          range of projects, from commercial construction to infrastructure
          development and beyond.
          <span className="max-lg:hidden">
            We have provided crane rental and management services for high-rise
            buildings, bridges, industrial facilities, renewable energy
            projects, and more. Our expertise in handling complex lifts,
            navigating challenging terrains, and adhering to strict safety
            standards has earned us a reputation for reliability and excellence
          </span>
        </p>
        <div className="mt-7 grid grid-cols-2 gap-3 place-items-center lg:grid-cols-4">
          <div className="w-[40vw] h-[50vw] md:w-[25vw] md:h-[30vw] lg:w-[20vw] lg:h-[30vw]">
            <video
              controls
              className="w-full h-full object-cover"
              muted
              src="https://ik.imagekit.io/ex8j5qixd/crane%20project.mp4?updatedAt=1710845040062"
            ></video>
          </div>
          <div className="w-[40vw] h-[50vw] md:w-[25vw] md:h-[30vw] lg:w-[20vw] lg:h-[30vw] bg-red-400"></div>
          <div className="w-[40vw] h-[50vw] md:w-[25vw] md:h-[30vw] lg:w-[20vw] lg:h-[30vw]">
            <video
              className="w-full h-full object-cover"
              controls
              muted
              src="https://ik.imagekit.io/ex8j5qixd/crane%20project2.mp4?updatedAt=1710845075770"
            ></video>
          </div>
          <div className="w-[40vw] h-[50vw] md:w-[25vw] md:h-[30vw] lg:w-[20vw] lg:h-[30vw] bg-red-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
