import React from "react";

const Network = () => {
  const country = [
    {
      img: "/images/bangladesh.svg (1).svg",
      name: "Bangladesh",
      description:
        "Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
    {
      img: "/images/Aus.svg",
      name: "United States",
      description:
        "Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
    {
      img: "/images/United.svg",
      name: "Australia",
      description:
        "Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
    {
      img: "/images/China.svg",
      name: "China",
      description:
        "Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
  ];

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
          {country.map((items, index) => (
            <div
              key={index}
              className="w-[90%] md:w-[70%] lg:w-[190px] py-8 bg-white shadow-xl rounded-lg cursor-pointer"
            >
              <div className="w-[90%] mx-auto space-y-2">
                <div className="flex justify-normal">
                  <img src={items.img} alt={index} className="w-12 h-12" />
                  <p className="text-lg text-[#183B56] font-medium text-center my-auto px-1">
                    {items.name}
                  </p>
                </div>
                <hr className="text-black" />

                <p className="w-full md:w-[190px] lg:w-[130px] text-[#7C8F9E] text-sm text-left">
                  {items.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Network;
