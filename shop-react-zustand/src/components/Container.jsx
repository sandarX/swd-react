/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export const Container = ({ children, className }) => {
  return (
    <div className={`w-full sm:w-10/12 mx-auto ${className}`}>
      {children}
    </div>
  );
};
