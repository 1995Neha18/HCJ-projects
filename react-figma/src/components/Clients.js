import React from "react";

const Clients = () => {
  return (
    <>
      <div className="w-[95%] mx-auto my-10 space-y-2">
        <div className="w-[95%] m-auto mt-16">
          <h2 className="text-4xl text-center font-bold leading-[60px] w-full lg:w-[70%] mx-auto">
            What say clients about us.
          </h2>
          <p className="text-xs text-[#90A3B4] text-center font-medium leading-[22px] w-[66%] md:w-[60%] lg:w-[40%] mx-auto">
            Event madness gathering innoies,& tech enthusiasts in Speced. do
            more informations.
          </p>
        </div>
        <div className="w-full mx-auto h-auto lg:h-[800px] flex justify-center items-center">
          <div className="w-[420px] flex flex-col justify-center items-center space-y-1 my-4">
            <div className="">
              <img
                src="/images/Boy.png"
                alt="boy"
                className="w-full h-full cursor-pointer"
              />
            </div>
            <p className="w-[80%] text-xs text-center text-[#90A3B4] font-normal leading-[20px]">
              Build your financial literacy within a transparent community.
              Follow other investors, share people from different professional
              backgrounds, and never be alone.
            </p>
            <h4 className="text-xl font-semibold text-center leading-[28px]">
              Jony Scotty
            </h4>
            <h6 className="text-md font-normal text-center leading-[20px]">
              UI Designer
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
