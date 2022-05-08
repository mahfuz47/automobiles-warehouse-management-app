import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateItem = () => {
  const { carsId } = useParams();
  const [quantity, setQuantity] = useState();
  const [carDetails, setCarDetails] = useState({});

  // const { performance } = carDetails;
  // console.log(performance);
  // const { quantity } = performance;
  // const [update, setUpdate] = useState();
  //-------------------
  //   getting data
  //------------------

  useEffect(() => {
    const url = `https://floating-fortress-93057.herokuapp.com/cars/${carsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarDetails(data));
  }, [carsId]);
  //   console.log(update);

  // useEffect(() => {
  //   axios.patch();
  // }, []);
  // let quantity = carDetails.performance.quantity;
  // const handleQuantityPlus = () => {};

  const handleQuantityPlus = () => {
    let quantityData = carDetails.quantity;
    setQuantity(quantityData);
    const plus = parseInt(quantity) + 1;
    console.log(plus);
  };

  return (
    <div>
      <h1>UPDATE :{carDetails._id}</h1>
      <div className="grid grid-cols-2 items-center space-x-4 gap-y-4">
        <div className="py-5">
          <img className="w-full rounded-xl" src={carDetails?.image} alt="" />
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center space-x-3">
              <p className="text-lg font-bold p-0 m-0">AVAILAVLE QUANTITY:</p>
              <div className=" my-3">
                <input
                  className="text-center pl-3 w-14 font-bold rounded bg-gray-300 text-gray-700"
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={quantity}
                />
              </div>
            </div>
            <div>
              <button
                onClick={handleQuantityPlus}
                className="bg-green-400 hover:bg-green-700 rounded-xl px-3 py-1"
              >
                Delivered
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-xl font-bold leading-6 font-mono text-gray-900">
                {carDetails?.carName}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Details and management functionalities.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Price</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <p>{carDetails?.price} BDT</p>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Engine</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {carDetails?.engineName}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Trim</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {carDetails?.trim}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Horse Power
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {carDetails?.horsePower}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Torque</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {carDetails?.Torque}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Cylinders
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {carDetails?.cylinders}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
