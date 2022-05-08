import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Banner from "../../Shared/Banner/Banner";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  const [user] = useAuthState(auth);

  if (user) {
    toast("Login Successful");
  } else {
    toast("Please Login");
  }

  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <ToastContainer />
    </div>
  );
};

export default Home;
