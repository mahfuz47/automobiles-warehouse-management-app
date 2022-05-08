import React from "react";

const Countries = () => {
  return (
    <div>
      <div className="bg-white my-16">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold font-mono tracking-tight text-indigo-800 sm:text-4xl">
              Relations with Other Coundtries
            </h2>
            <p className="mt-4 text-gray-500">
              Our branches are open now almost whole over the world. But here we
              display some of our great partners.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Malaysia</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Our All parts imported for services from Malaysia
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Vietnam</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Our Maximum professional mechanics are from Vietnam
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Singapur</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Our Luxarious leather, we imports from Singapore which are
                  used on our gadgets
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">America</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Our Best dealers are belongs to America and we export our cars
                  there in a huge ammount.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Japan</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Japan is one of the best dealers of us.
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Chaina</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Our Maximum cars are imported from China and maximum deals are
                  also we handle with them
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://www.planetware.com/wpimages/2020/08/japan-best-cities-tokyo.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://media.istockphoto.com/photos/petronas-towers-picture-id466842820?k=20&m=466842820&s=612x612&w=0&h=oK1M451nh2nE_tOjOBUeTnB6flgrP-tv4WLG3xMniE8="
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://i.natgeofe.com/k/95d61645-a0c7-470f-b198-74a399dd5dfb/singapore-city_square.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://vcdn-english.vnecdn.net/2020/12/08/209-1606372441-9336-1606380221-4091-1607420925.png"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
