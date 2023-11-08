import React from "react";
import BuyersCard from "./BuyersCard";

const Buyers = () => {
  return (
    <>
      <div className="container mx-auto space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center">
        <BuyersCard />
      </div>
    </>
  );
};

export default Buyers;
