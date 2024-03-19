import React from "react";

const Services = () => {
  return (
    <div className="w-full h-fit p-5" id="services-section">
      <div className="service-top w-full h-1/2 ">
        <h2 className="text-xl text-yellow-400 mb-2">Our Services</h2>
        <h1 className="text-3xl font-semibold leading-none mb-2 sm:text-5xl">
          Our Speciality in Crane Service
        </h1>
        <p className="leading-snug sm:w-2/3 lg:w-1/2 mt-5">
          At <b className="capitalize">parihar crane service</b>, we pride ourselves on providing comprehensive
          crane rental and management services tailored to meet the diverse
          needs of our clients. Our services encompass a wide range of
          offerings, including a versatile fleet of cranes suitable for various
          lifting requirements
        </p>
      </div>


      <div className="service-btm mt-20 w-full h-1/2 grid grid-cols-2 gap-3 place-items-center sm:grid-cols-4">

        <div className="size-36 sm:size-[20vw]">
          <img className="w-full h-full object-contain" src="https://5.imimg.com/data5/ANDROID/Default/2023/3/295211462/JV/NL/XD/30120456/product-jpeg-500x500.jpg" alt="" />
        </div>
        <div className="size-36 sm:size-[20vw]">
        <img className="w-full h-full object-cover" src="https://5.imimg.com/data5/SELLER/Default/2021/8/IJ/BF/NK/4020060/hydra-cranes-service.jpg" alt="" />

        </div>
        <div className="size-36 sm:size-[20vw]">
        <img className="w-full h-full object-contain" src="https://assets.tractorjunction.com/infra-junction/vehicle/crane/escorts/escorts-hydra-141688963916.webp" alt="" />
        </div>
        <div className="size-36 sm:size-[20vw] ">
        <img className="w-full h-full object-contain" src="https://www.marcopower.com/images/products/farana-hydra-crane.png" alt="" />
        </div>
      </div>


    </div>
  );
};

export default Services;
