import React from "react";
import GridCards from "./GridCards";

const Grid = () => {
  return (
    <>
      <div className="w-full h-auto lg:h-[530px] flex flex-col lg:flex-row justify-between space-y-2 my-20">
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center">
          <div className="w-full lg:w-[60%] flex flex-col justify-center items-center lg:items-start space-y-2">
            <h2 className="w-[80%] lg:w-full mx-auto text-5xl text-black font-bold leading-[66px]">
              We provide that service.
            </h2>
            <p className="text-sm text-[#7D82A1] font-medium leading-[25px] w-[80%] lg:max-w-[280px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo
            </p>
            <div className="flex justify-between w-[120px]">
              <button className="text-[#0075FF] font-normal py-1">
                Learn more
              </button>
              <img
                src="/images/arrow.svg.png"
                alt="arrow"
                className="w-5 h-5 mt-2"
              />
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-[50%] flex justify-normal">
          <div className="absolute left-0 lg:left-20 w-full lg:w-[80%] mx-auto flex justify-center items-center h-full bg-[#d5f1f9] rounded-xl"></div>
          <div className="z-50 w-full lg:w-[80%] my-8 grid grid-cols-1 md:grid-cols-2 grid-rows-2 place-items-center gap-y-8">
            <GridCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
