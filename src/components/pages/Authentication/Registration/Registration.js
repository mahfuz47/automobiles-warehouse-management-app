import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../../../../utilities/Loading";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
import { toast, ToastContainer } from "react-toastify";
import logo from "./logo.png";
import auth from "../../../../firebase.init";
import Title from "../../../Shared/Title/Title";

const Registration = () => {
  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/", { replace: true });
  }

  const handleRegisterUser = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Verification Email has been sent");
  };
  return (
    <div>
      <Title title={"Registration"}></Title>
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
                <label className="block" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  autoComplete="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                ></input>
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                ></input>
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                ></input>
              </div>
              <div className="mt-5 text-indigo-700">
                <Link
                  to="/login"
                  className="text-primary pe-auto text-decoration-none"
                  onClick={navigateLogin}
                >
                  Already have an account?
                </Link>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Create Account
                </button>
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
      <ToastContainer />
    </div>
  );
};

export default Registration;
