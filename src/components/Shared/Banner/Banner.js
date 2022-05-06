import React from "react";
const Banner = () => {
  return (
    <div className="relative bg-gray-200 py-24 overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div>
            <h1 className="text-3xl font font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              WELCOME TO{" "}
            </h1>
            <h1 className="text-5xl text-indigo-800 sm:text-5xl font-extrabold">
              AUTOMOBILES{" "}
              <span className="text-4xl text-gray-800">WAREHOUSE...</span>
            </h1>
            <div className="flex space-x-4 my-6">
              <button className="py-1 px-3 bg-indigo-400 hover:bg-indigo-600 rounded-xl">
                Login
              </button>
              <button className="py-1 px-3 bg-indigo-400 hover:bg-indigo-600 rounded-xl">
                sign up
              </button>
              <button className="py-1 px-3 bg-indigo-400 hover:bg-indigo-600 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://img.freepik.com/free-photo/headlights-new-red-car-car-dealership_146671-14964.jpg?w=740&t=st=1651817354~exp=1651817954~hmac=5cbad23a52fc0d7b4b36ffd253c27bcbcf84f202fd592e8aea6309b97a2dde81"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://img.freepik.com/free-photo/luxurious-black-car-riding-street-with-beautiful-sky_181624-33018.jpg?t=st=1651813721~exp=1651814321~hmac=900d9c5c5c0eedd5f48f02ef44d0020ef7cef92525fe79ae57f04b263a80ee91&w=740"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://img.freepik.com/free-photo/black-luxury-sport-sedan-car-standing-race-trace_114579-1169.jpg?t=st=1651801242~exp=1651801842~hmac=48bb3b418d4ae1fce81c7fbe3e6935e460f426d21a6fd385f301e1a6a97033c2&w=740"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://img.freepik.com/free-photo/silver-metallic-color-sport-sedan-road_114579-5035.jpg?t=st=1651813674~exp=1651814274~hmac=4037aad72486493ed5485f08b02143c8a4a9eb37ebeb51c3bdde8dd1b7c1f7c1&w=740"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://img.freepik.com/free-photo/yellow-sport-car-with-black-autotuning-road_114579-5051.jpg?t=st=1651813599~exp=1651814199~hmac=6d720d08410a3d5bf3c8c7f5a53cf67e76635dafbac73d56674871b2a071f431&w=740"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://img.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg?t=st=1651810834~exp=1651811434~hmac=e97848e1dbd54cb36974fc17440b73d714be5ede36b2f9afa5a5f202152a72f4&w=740"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://img.freepik.com/free-photo/red-luxury-sedan-road_114579-5079.jpg?t=st=1651810834~exp=1651811434~hmac=6abd5bf66775469b849ecb7735d1de0825aede82186b9aa40f482c0047a2a927&w=740"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
