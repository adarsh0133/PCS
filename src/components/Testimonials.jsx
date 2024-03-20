import React from "react";

const Testimonials = () => {
  return (
    <div
      className="w-full h-[80vh] p-5"
      id="testimonials-section"
    >
      <h1 className="text-xl font-semibold text-yellow-400">Testimonials</h1>
      <p className="font-semibold leading-none">some of our happy costumer review's from google</p>
      <div className="grid grid-cols-2 place-items-start py-10 md:grid-cols-4 w-full h-full">
        <div className="review-card w-[40vw] h-[45vw] sm:w-[35vw] sm:h-[30vw] md:w-[20vw] md:h-[35vw] lg:h-[27vw] flex flex-col items-center justify-center  p-2 bg-zinc-200 rounded-md shadow-xl overflow-hidden">
          <h1 className="text-base font-medium text-yellow-400 lg:text-2xl">Adarsh Singh</h1>
          <p className="leading-none mt-1 text-sm text-center lg:text-xl lg:leading-tight">Great crane rental service! They have a wide range of cranes available and provide excellent customer support.</p>
          <h3 className="mt-2 font-semibold text-xl">Rating:5/5</h3>
        </div>
        <div className="review-card w-[40vw] h-[45vw] sm:w-[35vw] sm:h-[30vw] md:w-[20vw] md:h-[35vw] lg:h-[27vw] flex flex-col items-center justify-center  p-2 bg-zinc-200 rounded-md shadow-xl overflow-hidden">
          <h1 className="text-base font-medium text-yellow-400 lg:text-2xl">sumit kapoor</h1>
          <p className="leading-none mt-1 text-sm text-center lg:text-xl lg:leading-tight">Good service please contact for any work I am feeling exciting for service, Easy booking process, competitive rates</p>
          <h3 className="mt-2 font-semibold text-xl">Rating:5/5</h3>
        </div>
        <div className="review-card w-[40vw] h-[45vw] sm:w-[35vw] sm:h-[30vw] md:w-[20vw] md:h-[35vw] lg:h-[27vw] flex flex-col items-center justify-center  p-2 bg-zinc-200 rounded-md shadow-xl overflow-hidden">
          <h1 className="text-base font-medium text-yellow-400 lg:text-2xl">Anuj Kushwaha</h1>
          <p className="leading-none mt-1 text-sm text-center lg:text-xl lg:leading-tight">Highly recommend this crane rental company. They offer safe and efficient solutions for all lifting needs.</p>
          <h3 className="mt-2 font-semibold text-xl">Rating:4.5/5</h3>
        </div>
        <div className="review-card w-[40vw] h-[45vw] sm:w-[35vw] sm:h-[30vw] md:w-[20vw] md:h-[35vw] lg:h-[27vw] flex flex-col items-center justify-center  p-2 bg-zinc-200 rounded-md shadow-xl overflow-hidden">
          <h1 className="text-base font-medium text-yellow-400 lg:text-2xl">Ankit Chaurasia</h1>
          <p className="leading-none mt-1 text-sm text-center lg:text-xl lg:leading-tight">Exceptional crane rental experience. Their equipment is well-maintained, and their operators are skilled.</p>
          <h3 className="mt-2 font-semibold text-xl">Rating:4.3/5</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
