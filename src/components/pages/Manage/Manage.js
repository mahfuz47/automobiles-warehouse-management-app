import React from "react";

import useCars from "../../../Hooks/useCars";

import "./Manage.css";

const Manage = () => {
  const [cars, setCars] = useCars();

  const handleDeleteCars = (id) => {
    const proceed = window.confirm(`Are you sure to delete ${cars.carName}?`);
    if (proceed) {
      const url = `https://floating-fortress-93057.herokuapp.com/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = cars.filter((car) => car._id !== id);
          setCars(remaining);
        });
    }
  };
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
            <td className="text-center">{car?.performance?.quantity}</td>
            <td className="text-center">
              <button
                onClick={() => handleDeleteCars(car._id)}
                className="bg-red-500 hover:bg-red-700 rounded-xl py-1 px-3"
              >
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
