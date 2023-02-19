import React, { useEffect, useState } from "react";
import Title from "../../Shared/Title/Title";

const MyItems = () => {
  const [addedItems, setAddedItems] = useState([]);
  useEffect(() => {
    const url = `https://automobile-warehouse-app-server.onrender.com/addItems`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddedItems(data));
  }, []);
  const handleDeleteItmes = (id) => {
    const proceedDelete = window.confirm("Are you sure to delete?");
    if (proceedDelete) {
      const url = `https://automobile-warehouse-app-server.onrender.com/addItems/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = addedItems.filter((item) => item._id !== id);
          setAddedItems(remaining);
        });
    }
  };
  return (
    <div>
      <Title title={"My Items"}></Title>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-indigo-600 font-mono ">
          MY ITEMS
        </h1>
      </div>
      <div className="my-12 px-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 gap-y-5">
        {addedItems.map((item) => (
          <div
            key={item._id}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg"
          >
            <img className="w-full" src={item.image} alt="item" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.carName}</div>
              <p className="text-gray-600 text-sm">Price: {item.price}</p>
              <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
              <p className="text-gray-600 text-sm">Engine: {item.engineName}</p>
              <p className="text-gray-600 text-sm">Trim: {item.trim}</p>
              <p className="text-gray-600 text-sm">Torque: {item.Torque}</p>
              <p className="text-gray-600 text-sm">
                Cylinders: {item.cylinders}
              </p>
              <p className="text-gray-600 text-sm">
                Horse power: {item.horsePower}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
              <button
                onClick={() => handleDeleteItmes(item._id)}
                className="bg-red-500 hover:bg-red-700  rounded-xl px-3 py-1 font-bold"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
