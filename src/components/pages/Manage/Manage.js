import React from "react";

import { useNavigate } from "react-router-dom";

import useCars from "../../../Hooks/useCars";
import Title from "../../Shared/Title/Title";
import "./Manage.css";

const Manage = () => {
  const [cars, setCars] = useCars();
  const navigate = useNavigate();

  const navigateTocarDetails = (id) => {
    navigate(`/cars/${id}`);
  };
  const handleDeleteCars = (id) => {
    const proceedDelete = window.confirm("Are you sure to delete?");
    if (proceedDelete) {
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
      <Title title={"Manage"}></Title>
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
                src={car?.image}
                alt={car?.carName}
              />
            </td>
            <td>{car.carName}</td>
            <td className="text-center">{car?.quantity}</td>
            <td className="px-0">
              <div className="flex justify-evenly">
                <button
                  onClick={() => handleDeleteCars(car._id)}
                  className="bg-red-500 hover:bg-red-700  rounded-xl px-3 py-1 font-bold"
                >
                  DELETE
                </button>
                <button
                  onClick={() => {
                    navigateTocarDetails(car._id);
                  }}
                  className="bg-green-500 rounded-xl px-3 py-1 font-bold hover:bg-green-600 text-white hover:text-black"
                >
                  UPDATE
                </button>
              </div>
            </td>
          </tr>
        ))}
      </table>
      <div className="text-center py-8">
        <button
          onClick={() => navigate("/addItems")}
          className="bg-indigo-600 hover:bg-indigo-700 rounded-xl px-3 py-1 text-white font-bold"
        >
          ADD NEW ITEM
        </button>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Manage;
