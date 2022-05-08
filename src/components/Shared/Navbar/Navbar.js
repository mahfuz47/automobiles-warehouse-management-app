/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../../../utilities/CustomLink";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import userImage from "../../images/userImage.png";
const navigation = [
  { name: "Manage", to: "/manage" },
  { name: "My Items", to: "/myItems" },
  { name: "Add", to: "/addItems" },
  { name: "Blogs", to: "/blogs" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src={logo}
                        alt="warehouse logo"
                      />
                    </Link>
                    <Link to="/">
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src={logo}
                        alt="warehouse logo"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <CustomLink
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          //   aria-current={item.current ? "page" : undefined}
                          aria-current="page"
                        >
                          {item.name}
                        </CustomLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}

                  {user ? (
                    <p className="font-bold text-gray-200 hover:text-gray-400 px-2 cursor-pointer">
                      {user.displayName}
                    </p>
                  ) : (
                    <img className="w-5 h-5" src={userImage} alt="" />
                  )}
                  {user ? (
                    <button
                      className="text-bold text-gray-300 hover:text-gray-50 hover:bg-slate-600 py-1 rounded-xl px-2"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  ) : (
                    <Link
                      className="text-bold text-gray-300 hover:text-gray-50 hover:bg-slate-600 py-1 rounded-xl px-2"
                      to="/login"
                    >
                      Sign in
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
