import React from "react";
import Banner from "../../Shared/Banner/Banner";
import Countries from "../../Shared/Countries/Countries";
import Title from "../../Shared/Title/Title";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <Title title={"Home"}></Title>
      {/* <ToastContainer /> */}
      <Banner></Banner>
      <Inventory></Inventory>
      <Countries></Countries>
    </div>
  );
};

export default Home;
