import React from "react";

import useCars from "../../../Hooks/useCars";

import "./Manage.css";

const Manage = () => {
  const [cars] = useCars();

  return (
    <div>
      <table>
        <tr>
          <th>Vehicle</th>
          <th>Name</th>
          <th>Available Quantity</th>
          <th>Manage</th>
        </tr>
        {cars.map((car) => (
          <tr key={car._id}>
            <td className="p-0 flex justify-center">
              <img
                className="w-24 h-18  rounded-xl"
                src={car.image}
                alt={car.carName}
              />
            </td>
            <td>{car.carName}</td>
            <td className="text-center">{car.performance.quantity}</td>
            <td className="text-center">
              <button className="bg-red-500 hover:bg-red-700 rounded-xl py-1 px-3">
                DELETE
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Manage;
