import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateItem = () => {
  const { carsId } = useParams();
  const [carDetails, setCarDetails] = useState({});
  useEffect(() => {
    const url = `https://floating-fortress-93057.herokuapp.com/cars/${carsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarDetails(data));
  }, [carsId]);

  return (
    <div>
      <h1>UPDATE :{carDetails._id}</h1>
    </div>
  );
};

export default UpdateItem;
