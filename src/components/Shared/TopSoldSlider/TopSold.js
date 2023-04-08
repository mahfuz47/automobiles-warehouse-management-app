import React from "react";

const TopSold = () => {
  return (
    <div>
      <div className="text-center py-4">
        <h1 className="text-4xl font-bold text-indigo-700 font-mono ">
          LAST YEAR TOP SOLD
        </h1>
      </div>

      <div className="flex flex-wrap flex-auto justify-center lg:w-10/12 w-11/12 mx-auto items-center gap-5">
        <div className="">
          <img
            class=" w-[430px] h-80 rounded-xl"
            src="https://www.motortrend.com/uploads/2021/12/2022_Ford-E-Transit_02.jpg?fit=around%7C681:425.625"
            alt=""
          />
        </div>
        <div className="lg:text-start text-center">
          <div className="font-bold text-2xl mb-2">Ford E-Transit</div>
          <p className="text-gray-600 ">Price: 5,145,300</p>
          <p className="text-gray-600">Quantity: 16</p>
          <p className="text-gray-600">Engine: Single Electric</p>
          <p className="text-gray-600">Trim: 350 w/130 WB Low Roof Cargo Van</p>
          <p className="text-gray-600">Torque: 317</p>
          <p className="text-gray-600">Cylinders: 4</p>
          <p className="text-gray-600">Horse power: 266</p>
          <p className="text-gray-900 font-bold py-3">
            TOTAL SOLD: 1, 234, 133 CARS
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSold;
