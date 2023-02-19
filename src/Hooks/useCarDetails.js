// import { useEffect, useState } from "react";

// const useCarDetails = (carsId) => {
//   const [carDetails, setCarDetails] = useState({});
//   useEffect(() => {
//     const url = `https://automobile-warehouse-app-server.onrender.com/cars/${carsId}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setCarDetails(data);
//       });
//   }, [carsId]);

//   return [carDetails];
// };

// export default useCarDetails;
