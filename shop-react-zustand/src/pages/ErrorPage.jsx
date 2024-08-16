/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/404 Error-rafiki.svg";

const ErrorPage = () => {
  return (
    <section className=" w-full h-screen p-5 flex flex-col items-center justify-center gap-y-2">
      <div>
        <img src={error} alt="" className="w-full " />
      </div>
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Page Not Found</h1>
        <p className="w-full md:w-1/2 mx-auto my-5 text-gray-700">
          The page you're looking for might have been removed, had its name
          changed, or is temporarily unavailable. Please check the URL or return
          to the homepage.
        </p>
        <Link
          to={"/"}
          className=" border border-blue-400 text-gray-700 px-4 py-2"
        >
          Return to home{" "}
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
