/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from "react";
import { Container } from "./Container";
import CategoryButton from "./CategoryButton";
import useCategoryStore from "../store/useCategoryStore";

const CategorySection = () => {
  const {categories} = useCategoryStore();

  return (
    <section className="px-5 py-3">
      <Container>
        <h1 className="text-lg text-slate-600">Product Categories</h1>
        <div className="text-gray-700 flex items-center gap-x-5 mt-5 overflow-scroll category-btn-gp">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
