import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const url = `https://floating-fortress-93057.herokuapp.com/cars`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  console.log(cars);
  return [cars, setCars];
};

export default useCars;
