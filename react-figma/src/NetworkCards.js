import React from 'react'

const NetworkCards = () => {
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
    </>
  )
}

export default NetworkCards
