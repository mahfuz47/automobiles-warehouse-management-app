import React from "react";
import Title from "../../Shared/Title/Title";

const AddItems = () => {
  const handleAddCars = (e) => {
    e.preventDefault();
    const carName = e.target.carName.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const engineName = e.target.engineName.value;
    const trim = e.target.trim.value;
    const horsePower = e.target.horsePower.value;
    const Torque = e.target.Torque.value;
    const cylinders = e.target.cylinders.value;
    const quantity = e.target.quantity.value;

    const carDetail = {
      carName,
      quantity,
      price,
      image,
      engineName,
      trim,
      Torque,
      cylinders,
      horsePower,
    };

    fetch("https://automobile-warehouse-app-server.onrender.com/addItems", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(carDetail),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log();
      });
    e.target.reset();
  };

  return (
    <div>
      <div className="text-center py-4">
        <h1 className="text-3xl font-bold text-indigo-600 font-mono ">
          ADD NEW ITEM
        </h1>
      </div>
      <Title title={"Add"}></Title>
      <div className="flex justify-center">
        <div className="mt-20 sm:mt-0 w-9/12 ">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" onSubmit={handleAddCars}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="carName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Vehicles Name
                        </label>
                        <input
                          type="text"
                          name="carName"
                          placeholder="Vehicles Name"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="quantity"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Quantity
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          placeholder="quantity"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="image"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Image
                        </label>
                        <input
                          type="text"
                          name="image"
                          placeholder="Photo URL"
                          className="mt-1 block w-96 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="engineName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Engine
                        </label>
                        <input
                          id="engineName"
                          name="engineName"
                          autoComplete="engineName"
                          placeholder="Engine"
                          className="mt-1 block w-full py-2 px-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Trim
                        </label>
                        <input
                          type="text"
                          name="trim"
                          placeholder="Trim"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="Torque"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Torque
                        </label>
                        <input
                          type="text"
                          name="Torque"
                          placeholder="Torque"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="cylinders"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Cylinders
                        </label>
                        <input
                          type="number"
                          name="cylinders"
                          placeholder="Cylinder"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="horsePower"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Horse Power
                        </label>
                        <input
                          type="text"
                          name="horsePower"
                          placeholder="Horse power"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Price
                        </label>
                        <input
                          type="text"
                          name="price"
                          placeholder="Price"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 invalid:border-gray-500 invalid:text-gray-600 focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 space-x-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      UPDATE
                    </button>
                  </div>
                </div>
              </form>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-mono mx-3"
                href="https://www.motortrend.com/s/ford/"
              >
                Need some data to add?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
