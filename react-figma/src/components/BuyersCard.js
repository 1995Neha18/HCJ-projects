import React from 'react'

const BuyersCard = () => {
 const details = [
  {
    img: "/images/teammembers.svg.svg",
    title: "80K",
    subtitle: "Our buyers",
    description: "Follow a hashtag growth total posts, videos, and images.",
  },
  {
    img: "/images/ourbuyers.svg.svg",
    title: "90K",
    subtitle: "Our buyers",
    description: "Follow a hashtag growth total posts, videos, and images.",
  },
  {
    img: "/images/projectcompleted.svg.svg",
    title: "80%",
    subtitle: "Our buyers",
    description: "Follow a hashtag growth total posts, videos, and images.",
  },
  {
    img: "/images/teammembers.svg.svg",
    title: "50%",
    subtitle: "Our buyers",
    description: "Follow a hashtag growth total posts, videos, and images.",
  },
];

  return (
    <>
       {details.map((buyer, index) => (
          <div
            key={index}
            className="w-[95%] lg:w-[240px] flex flex-col justify-center items-center cursor-pointer"
          >
            <img src={buyer.img} alt={index} className="mx-auto" />
            <h4 className="text-black text-3xl font-bold leading-[60px]">
              {buyer.title}
            </h4>
            <p className="text-black text-lg font-bold leading-7">
              {buyer.subtitle}
            </p>
            <p className="text-black text-sm text-center w-[80%] lg:w-[60%] mx-auto">
              {buyer.description}
            </p>
          </div>
        ))}
    </>
  )
}

export default BuyersCard
