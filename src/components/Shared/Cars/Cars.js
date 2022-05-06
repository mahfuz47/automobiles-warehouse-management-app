import React from "react";
import useCars from "../../../Hooks/useCars";

const Cars = () => {
  const [cars] = useCars();
  console.log(cars);
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-10 lg:py-10 lg:max-w-none">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center my-5 font-serif">
              INVENTOEY
            </h2>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 gap-y-5">
              {cars.slice(0, 6).map((car) => (
                <div key={car._id} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={car.image}
                      alt={car.carName}
                      className="w-full h-full object-center object-cover"
                      title={car.carNname}
                    />
                  </div>
                  <div className="flex items-center gap-x-24">
                    <h3 className="mt-6 text-xl font-bold font-mono text-slate-900 px-2">
                      <a href="/cars/:id">{car.carName}</a>
                    </h3>
                    <button className="bg-emerald-400 rounded-xl px-3 py-1 font-bold mt-6 hover:bg-emerald-600">
                      UPDATE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
