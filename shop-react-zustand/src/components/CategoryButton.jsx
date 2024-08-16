/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryButton = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();

  const handelActiveCategory = () => {
    activeCategory(id);
  };

  return (
    <button
      onClick={handelActiveCategory}
      className={`${
        isActive ? "bg-blue-400 text-white" : ""
      } border border-blue-400 px-4 py-2 text-nowrap category-btn hover:bg-blue-400 hover:text-white hover:duration-300`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
