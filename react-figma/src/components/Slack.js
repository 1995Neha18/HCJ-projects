import React from "react";

const Slack = () => {
  const cardImage = [
    { img1: "/images/Garnier.png" },
    { img1: "/images/Slack.png" },
    { img1: "/images/Udemy.png" },
    { img1: "/images/Google.png" },
  ];
  return (
    <>
      <div class="container mx-auto h-[200px] place-items-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {cardImage.map((item, index) => (
          <img key={index} src={item.img1} alt={index} />
        ))}
      </div>
    </>
  );
};

export default Slack;
