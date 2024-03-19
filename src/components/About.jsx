import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen p-5 sm:flex" id="about-section">
      <div className="about-top w-full h-1/2  sm:h-full sm:w-1/2 sm:p-10">
        <h2 className="text-xl text-yellow-400">About Us</h2>
        <h1 className="text-3xl text-zinc-900 leading-none mt-2 mb-2 font-semibold sm:text-5xl">
          Elevating Projects Through Dirt and Dust!
        </h1>
        <p className="text-l text-zinc-900 leading-snug">
          At <b>Parihar crane service</b>, we are passionate about providing
          top-quality crane rental services that meet the unique needs of our
          clients. With years of experience in the industry, we have established
          ourselves as a trusted partner for projects of all sizes, from
          construction sites to industrial facilities.
        </p>

        <div className="about-points w-full flex justify-between mt-5 pr-5 max-lg:hidden">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <i className="ri-check-fill text-yellow-400 font-semibold text-xl"></i>{" "}
              <h1 className="font-semibold text-xl">Rent and Manage Crane</h1>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-check-fill text-yellow-400 font-semibold text-xl"></i>{" "}
              <h1 className="font-semibold text-xl">View accurate rates</h1>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-check-fill text-yellow-400 font-semibold text-xl"></i>{" "}
              <h1 className="font-semibold text-xl">Full Satisfaction Guaranteed</h1>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <i className="ri-check-fill text-yellow-400 font-semibold text-xl"></i>{" "}
              <h1 className="font-semibold text-xl">Professional Crane Operators</h1>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-check-fill text-yellow-400 font-semibold text-xl"></i>{" "}
              <h1 className="font-semibold text-xl">Project Management and Logistics</h1>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-check-fill text-yellow-400 font-semibold text-xl"></i>{" "}
              <h1 className="font-semibold text-xl">Regular Maintenance</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="about-btm relative w-full h-1/2 flex justify-between items-center sm:h-full sm:w-1/2 sm:justify-evenly">
        <div className="about-btm-lft w-[45%] h-[80%] bg-yellow-300 overflow-hidden">
          <img className="w-full h-full" src="https://plus.unsplash.com/premium_photo-1681992175779-44c08303ddb7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="about-btm-rgt w-[45%] h-[80%] bg-[#F0F0F0] overflow-hidden">
          <img className="w-full h-full" src="https://images.unsplash.com/photo-1581360818940-0d8ddcb99409?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="about-circle absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] size-24  sm:size-36 border-[2px] rounded-full grid place-content-center bg-yellow-400">
          <h2 className="text-lg font-semibold text-zinc-50">Since 2013</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
