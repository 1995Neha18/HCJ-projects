import React from "react";

const Grid = () => {
  const cardssDatas = [
    {
      img: "/images/marketing.svg.svg",
      title: "Marketing",
      description: "Follow a hashtag total posts, videos",
    },
    {
      img: "/images/graphic.svg.svg",
      title: "Graphic Design",
      description: "Follow a hashtag total posts, videos",
    },
    {
      img: "/images/heaking.svg.svg",
      title: "Heaking",
      description: "Follow a hashtag total posts, videos",
    },
    {
      img: "/images/uidesign.svg.svg",
      title: "UI/UX Design",
      description: "Follow a hashtag total posts, videos",
    },
  ];

  return (
    <>
      <div className="w-full h-auto lg:h-[530px] flex flex-col lg:flex-row justify-between space-y-2 my-20">
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center">
          <div className="w-full lg:w-[60%] flex flex-col justify-center items-center lg:items-start space-y-2">
            <h2 className="w-[80%] lg:w-full mx-auto text-5xl text-[#000000] font-bold leading-[66px]">
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
            {cardssDatas.map((cards, index) => (
              <div
                key={index}
                className="w-[60%] md:w-[296px] lg:w-[160px] h-[180px] lg:h-[220px] py-4 bg-white rounded-2xl flex flex-col justify-center items-start space-y-8 shadow-lg"
              >
                <div className="w-[90%] mx-auto px-4 space-y-2 cursor-pointer">
                  <img
                    src={cards.img}
                    alt={cards.title}
                    className="w-10 h-10"
                  />
                  <h4 className="text-black text-xl font-bold leading-[28px] w-full lg:w-[50%]">
                    {cards.title}
                  </h4>
                  <p className="text-[#7D82A1] text-xs font-medium leading-[20px] w-[80%] lg:w-[80px]">
                    {cards.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
