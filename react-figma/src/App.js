import React from "react";
import Clients from "./components/Clients";
import Banner from "./components/Banner";
import Slack from "./components/Slack";
import Buyers from "./components/Buyers";
import Grid from "./components/Grid";
import Quality from "./components/Quality";
import Network from "./components/Network";
import BlockCard from "./components/BlockCard";

const App = () => {
  return (
    <div>
      <BlockCard />
      <Banner />
      <Slack />
      <Buyers />
      <Grid />
      <Quality />
      <Network />
      <Clients />
    </div>
  );
};

export default App;
