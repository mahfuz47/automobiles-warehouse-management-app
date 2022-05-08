import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../../utilities/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  // const navigate = useNavigate();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (sending) {
    return <Loading></Loading>;
  }
  if (error) {
    alert("Please try again leter");
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // const from = location.state?.from?.pathname || "/";

  // if (user.emailVerified) {
  //   navigate(from);
  // }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="flex justify-center">
        <div className="text-center mt-5 p-3 bg-indigo-300 rounded-xl w-2/4">
          <h3 className="text-indigo-600 text-5xl">
            Your Email is not verified!!
          </h3>
          <h5 className="text-gray-700 text-3xl">
            Please Verify your email address
          </h5>
          <button
            className="bg-gray-500 hover:bg-gray-600 px-3 py-1 rounded-xl my-3"
            onClick={async () => {
              await sendEmailVerification();
              toast("email has been sent");
            }}
          >
            Send Verification Email Again
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
