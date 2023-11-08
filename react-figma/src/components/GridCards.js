import React from 'react'

const GridCards = () => {
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
    </>
  )
}

export default GridCards
