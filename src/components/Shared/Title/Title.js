import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title> {title} | Automobiles Warehouse</title>
      </Helmet>
    </div>
  );
};

export default Title;
