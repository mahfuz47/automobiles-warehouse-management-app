import { LockClosedIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../../firebase.init";
import Loading from "../../../../utilities/Loading";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
import Title from "../../../Shared/Title/Title";
import logo from "./logo.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let errorElement;
  if (loading || sending) {
    return <Loading></Loading>;
  }

  const navigateToRegister = () => {
    navigate("/registration");
  };

  if (error) {
    errorElement = <p className="text-red-600">Error: {error?.message}</p>;
  }

  if (user) {
    navigate(from, { replace: true });
    toast("login successful");
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const handleResetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email has been send");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div>
      <Title title={"Login"}></Title>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold font-serif text-indigo-600">
              Sign in to your account
            </h2>
          </div>
          <form onSubmit={handleUserSignIn} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onBlur={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onBlur={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <button
                  onClick={handleResetPassword}
                  className="font-medium text-indigo-600 hover:text-indigo-500 no-underline"
                >
                  Forgot your password?
                </button>
              </div>
            </div>
            <div className="text-sm">
              <button
                onClick={navigateToRegister}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                New to Automobiles?
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
            {errorElement}
            <div className="flex justify-center items-center py-3">
              <div className="bg-gray-500 w-32 h-px"></div>
              <p className="text-lg px-2 font-serif font-bold text-indigo-500">
                Sign In <span className="text-sm">with</span>
              </p>
              <div className="bg-gray-500 w-32 h-px"></div>
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
