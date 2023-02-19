import React from "react";
import Banner from "../../Shared/Banner/Banner";
import Countries from "../../Shared/Countries/Countries";
import Title from "../../Shared/Title/Title";
import TopSold from "../../Shared/TopSoldSlider/TopSold";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div className="h-full">
      <Title title={"Home"}></Title>
      {/* <ToastContainer /> */}
      <Banner></Banner>
      <Inventory></Inventory>
      <Countries></Countries>
      <TopSold></TopSold>
    </div>
  );
};

export default Home;
