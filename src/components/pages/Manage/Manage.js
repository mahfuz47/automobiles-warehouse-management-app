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
          <th>Available Quantity</th>
          <th>Manage</th>
        </tr>
        {cars.map((car) => (
          <tr>
            <td>{car.carName}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Manage;
