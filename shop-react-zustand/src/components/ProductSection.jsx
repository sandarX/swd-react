/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "./Container";
import ProductCard from "./ProductCard";
import useProductStore from "../store/useProductStore";

const ProductSection = () => {
  
  const { products } = useProductStore();

  return (
    <section className="px-5 py-3">
      <Container>
        <h1 className="text-lg text-slate-600 mb-5">Available Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
