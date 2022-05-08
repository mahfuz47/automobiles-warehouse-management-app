import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../utilities/Loading";
import github from "../../images/github.png";
import google from "../../images/google.png";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user || user1) {
    navigate(from, { replace: true });
  }

  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-red-600">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  return (
    <div className="text-center">
      {errorElement}
      <div className="flex justify-center space-x-6 bg-indigo-200 rounded-xl item-center">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-indigo-300 hover:bg-indigo-500 rounded-xl px-4 py-2"
        >
          <img src={google} alt="google account" />
        </button>
        <div>
          <p className="text-4xl font-thin text-gray-600">||</p>
        </div>
        <button
          onClick={() => signInWithGithub()}
          className="bg-indigo-300 hover:bg-indigo-500 rounded-xl px-4 py-2"
        >
          <img src={github} alt="github account" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
