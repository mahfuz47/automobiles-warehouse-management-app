import React from "react";
import { Link } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  return (
    <div className="font-semibold">
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
export default CustomLink;
