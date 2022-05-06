import React from "react";
import "./Table.css";
const Table = () => {
  return (
    <div>
      <tr>
        <td>
          <img src="" alt="" />
        </td>
        <td>car</td>
        <td>535</td>
        <td className="text-center">
          <button className="bg-red-500 hover:bg-red-600 py-1 px-3 rounded-xl">
            DELETE
          </button>
        </td>
      </tr>
    </div>
  );
};

export default Table;
