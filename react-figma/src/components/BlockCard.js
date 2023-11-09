import React from "react";

const BlockCard = () => {
  const CardsData = [
    {
      img: "/images/download.jpeg",
      title: "Tourism",
      subtitle:
        "Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
    {
      img: "/images/download (1).jpeg",
      title: "Tourism",
      subtitle:
        "Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
    {
      img: "/images/download (2).jpeg",
      title: "Tourism",
      subtitle:
        "Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
    {
      img: "/images/download (3).jpeg",
      title: "Tourism",
      subtitle:
        "Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
    {
      img: "/images/download (4).jpeg",
      title: "Tourism",
      subtitle:
        "Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
    {
      img: "/images/images (1).jpeg",
      title: "Tourism",
      subtitle:
        "Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
    {
      img: "/images/images (2).jpeg",
      title: "Tourism",
      subtitle:
        "Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
    {
      img: "/images/images.jpeg",
      title: "Tourism",
      subtitle:
        "Event madness gathering innoies, & tech enthusiasts in Speced.",
    },
  ];

  return (
    <>
      <div className="container mx-auto  min-h-screen">
        <div className="w-full grid grid-cols-4 gap-4">
          {CardsData.map((card, index) => (
            <div className="w-[230px] flex flex-col justify-center items-center space-y-2 rounded-lg shadow-xl ">
              <img src={card.img} alt={index} className="w-full h-full" />
              <h3 className="text-lg text-[#183B56] font-medium text-center my-auto px-1">
                {card.title}
              </h3>
              <p className="w-full md:w-[190px] lg:w-[130px] text-[#7C8F9E] text-sm text-center">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlockCard;
