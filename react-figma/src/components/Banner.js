import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <>
      <div className="relative container mx-auto w-full h-auto md:h-[360px] space-y-2 flex justify-center items-center">
        <div>
          <img
            src="/Images/lavender.svg"
            alt="lavender"
            className="absolute top-0 left-1/2"
          />
          <img
            src="/Images/Oleafsvg.svg"
            alt="Oleafsvg"
            className="absolute top-0 left-[12%]"
          />
          <img
            src="/Images/Tleaf.svg"
            alt="Tleaf"
            className="absolute top-4 right-[10%]"
          />
        </div>
        <div className="w-full my-auto flex flex-col justify-center items-center">
          <div className="w-[70%] mx-auto text-[#002834] text-center font-medium">
            <h1 className="text-6xl font-bold leading-[80px] text-center py-4">
              Solve problem with an integrated agency.
            </h1>
          </div>
          <div className="w-[60%] mx-auto my-2">
            <p className="text-sm text-center font-normal text-[#7D82A1] leading-[20px]">
              Ehya is the Instagram analytics platform teams use to stay focused
              on the goals, track engagement for report your business .
            </p>
          </div>

          <div className="relative overflow-hidden w-full">
            <img
              src="/Images/Pcircle.svg"
              alt="Pcircle"
              className="absolute left-0 top-8"
            />

            <div className="w-[55%] lg:w-[45%] mx-auto mt-2 text-sm text-white font-medium space-x-0 md:space-x-2 lg:space-x-8 space-y-4 md:space-y-">
              <Button text={" See our portfolio"} />
              <Button text={" More info"} backgroundColor="bg-white" isOutlined={true} textColor="text-[#0075ff]" />
            </div>
          </div>
        </div>
      </div>

      {/* Image & Svgs  */}
      <div className="relative container w-full mx-auto mt-4 md:mt-14 lg:mt-2 h-[300px] md:h-[420px] lg:h-[510px] flex justify-center items-center">
        <div className="w-[80%] z-50 cursor-pointer">
          <img
            src="/Images/Image.svg"
            alt="banner"
            className="shadow-xl rounded-xl"
          />
        </div>
        <div className="flex absolute top-0">
          <img
            src="/Images/Green.svg"
            alt="Purple"
            className="w-24 md:w-full"
          />
          <img
            src="/Images/Purple.svg"
            alt="Purple"
            className="w-24 md:w-full"
          />
        </div>

        <div className="w-[90%] md:w-[85%] flex justify-between absolute bottom-10 md:bottom-0">
          <img
            src="/Images/Teal.svg"
            alt="Purple"
            className="h-[140px] md:h-full"
          />
          <img
            src="/Images/Orange.svg"
            alt="Purple"
            className="h-[140px] md:h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
