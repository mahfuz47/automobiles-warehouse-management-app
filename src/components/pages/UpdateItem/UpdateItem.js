import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../Shared/Title/Title";

const UpdateItem = () => {
  const { carsId } = useParams();
  const [carDetails, setCarDetails] = useState({});

  useEffect(() => {
    const url = `https://automobile-warehouse-app-server.onrender.com/cars/${carsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarDetails(data));
  }, [carsId]);

  // const handleDelivered = (id) => {
  //   const quantityData = parseInt(carDetails.quantity);
  //   const quantity = quantityData > 0 ? quantityData - 1 : quantityData;
  //   const updateItem = { quantity };
  //   fetch(`http://localhost:5000/cars/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(updateItem),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setQuantity(data);
  //     });
  // };

  return (
    <div>
      <Title title={"Update"}></Title>

      <div className="grid lg:grid-cols-2 grid-cols-1 items-center space-x-4 gap-y-4">
        <div className="py-5 px-2">
          <img className="w-full rounded-xl" src={carDetails?.image} alt="" />
          <div className="flex justify-between items-center px-2">
            <div className="flex items-center space-x-3">
              <p className="lg:text-lg text-sm font-bold p-0 m-0">
                AVAILAVLE QUANTITY:
              </p>
              <div className=" my-3">
                <input
                  className="text-center pl-3 w-14 font-bold rounded bg-gray-300 text-gray-700"
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={carDetails.quantity}
                />
              </div>
            </div>
            <div>
              <button
                // onClick={handleDelivered}
                className="bg-green-400 hover:bg-green-700 border-0 rounded-lg px-3 py-1"
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
