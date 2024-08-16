/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ currentPageTitle }) => {
  return (
    <div className=" w-full flex gap-3 mb-5">
      <Link to={"/"} className=" text-gray-400">
        Home
      </Link>
      <span className=" text-gray-400">/</span>
      <p className="text-gray-700">{currentPageTitle}</p>
    </div>
  );
};

export default BreadCrumb;
