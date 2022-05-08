import React from "react";
import Title from "../../Shared/Title/Title";

const PageNotFound = () => {
  return (
    <div>
      <Title title={"Error"}></Title>
      <img className="w-full" src={require("./error-image.jpg")} alt="" />
    </div>
  );
};

export default PageNotFound;
