import React from "react";

const LandingPage = () => {
  return (
    <div
      id="home-section"
      className="w-full h-screen bg-[url(https://t3.ftcdn.net/jpg/01/79/03/56/360_F_179035673_zXpmg0CcsyLI1fqLP0RMDYxh3ToLxuVn.jpg)] bg-cover bg-center pt-20 px-10 sm:flex"
    >
      <div className="sm:w-1/2 sm:h-full sm:p-16 flex flex-col">
        <h1 className="text-5xl lg:text-7xl font-bold text-zinc-50 mt-2 leading-tight = (second) => {third}">
          Heavy <br /> - Duty <br /> Machinery
        </h1>
        <button className="px-4 py-2 w-fit bg-yellow-400 text-zinc-50 font-semibold mt-4 rounded">
          <a href="tel:+91 74153 56540">- Call Any Time</a>
        </button>
      </div>

      <div className="sm:w-1/2 sm:h-full flex justify-center pt-10">
        <div className="p-5 border-zinc-500 border-[4px] mt-3 sm:w-1/2 h-1/2 flex flex-col justify-evenly backdrop-blur-sm">
          <h3 className="text-yellow-400 font-bold">info</h3>
          <h1 className="capitalize font-semibold text-xl text-zinc-800">
            Quality works required best tool
          </h1>
          <div className="h-[2px] bg-white w-1/2 mt-2 mb-2"></div>
          <h2 className="font-semibold text-xl text-zinc-800 leading-none">
            Explore our large selection of expertly maintained heavy equipment
            for your project.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
