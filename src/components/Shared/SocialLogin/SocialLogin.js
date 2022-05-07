import React from "react";
import github from "../../images/github.png";
import google from "../../images/google.png";

const SocialLogin = () => {
  return (
    <div className="flex justify-center space-x-6 bg-indigo-200 rounded-xl item-center">
      <button className="bg-indigo-300 hover:bg-indigo-500 rounded-xl px-4 py-2">
        <img src={google} alt="google account" />
      </button>
      <div>
        <p className="text-4xl font-thin text-gray-600">||</p>
      </div>
      <button className="bg-indigo-300 hover:bg-indigo-500 rounded-xl px-4 py-2">
        <img src={github} alt="github account" />
      </button>
    </div>
  );
};

export default SocialLogin;
