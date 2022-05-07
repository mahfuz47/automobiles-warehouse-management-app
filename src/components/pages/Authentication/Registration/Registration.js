import React from "react";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import logo from "./logo.png";
import auth from "../../../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../../../utilities/Loading";

const Registration = () => {
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  console.log(user);
  if (error) {
    toast("Please Try Again");
  }

  if (loading || updating) {
    return <Loading></Loading>;
  }

  const handleRegisterUser = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Registered profile");
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div className="flex justify-center py-3">
            <img className="w-1/4" src={logo} alt="warehouse logo" />
          </div>
          <h3 className="text-2xl font-extrabold text-center font-serif text-indigo-600">
            Registration
          </h3>
          <form onSubmit={handleRegisterUser}>
            <div className="mt-4">
              <div className="mt-4">
                <label className="block" for="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                ></input>
              </div>
              <div className="mt-4">
                <label className="block" for="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                ></input>
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                ></input>
              </div>
              <div className="mt-5 text-grey-dark">
                Already have an account?
                <a className="text-blue-600 hover:underline" href="/login">
                  Log in
                </a>
              </div>
              <div className="flex">
                <input
                  type="submit"
                  value="Create Account"
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                ></input>
              </div>

              <div>
                <div className="flex justify-center items-center py-3">
                  <div className="bg-gray-500 w-32 h-px"></div>
                  <p className="text-lg px-2 font-serif font-bold text-indigo-500">
                    Sign Up <span className="text-sm">with</span>
                  </p>
                  <div className="bg-gray-500 w-32 h-px"></div>
                </div>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Registration;
