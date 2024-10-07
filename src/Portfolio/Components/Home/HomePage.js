import React from "react";
import Data from "../../Data/data.json";
import Portfolio from "../ComponentBlocks/Portfolio";

const HomePage = () => {
  let DataJSON = {
    Data: Data,
  };

  return (
    <div>
      <Portfolio {...DataJSON} />
    </div>
  );
};
export default HomePage;
