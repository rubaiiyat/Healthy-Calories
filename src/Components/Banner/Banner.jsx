import React from "react";
import banner from "../../images/banner.png";
const Banner = () => {
  return (
    <div className="relative mt-5">
      <img
        className="w-full rounded-2xl brightness-50"
        src={banner}
        alt="Banner"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
        <h1 className="font-bold text-2xl lg:text-4xl ">
          Welcome to Recipe Calories
        </h1>
        <p className="hidden md:flex justify-center md:text-2xl lg:text-lg mt-2">
          Discover Delicious and Healthy Recipes. From quick snacks to
          full-course meals, <br /> explore a variety of recipes curated for
          taste and nutrition.
        </p>

        <div className="flex gap-5 justify-center mt-2">
          <button className="btn bg-green-400 text-black hover:bg-green-500 border-green-500 text-sm ">
            Explore Now
          </button>
          <button className="btn bg-transparent text-white hover:bg-white hover:text-black border-white text-sm ">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
