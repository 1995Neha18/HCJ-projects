import React from "react";
import NetworkCards from "../NetworkCards";

const Network = () => {
  return (
    <>
      <div className="bg-[#d5f1f9]">
        <div>
          <h2 className="text-5xl text-center font-bold leading-[70px] w-[95%] md:w-[70%] lg:w-[50%] mx-auto py-8">
            Our network & world work details.
          </h2>
          <div className="w-[95%] mx-auto">
            <img src="/images/Map.png" alt="Map" className="w-full h-full" />
          </div>
        </div>
        <div className="w-[95%] mx-auto py-4 space-y-4 md:space-y-2 lg:space-y-0 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <NetworkCards />
        </div>
      </div>
    </>
  );
};

export default Network;
