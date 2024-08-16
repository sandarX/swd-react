/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/product";
import Rating from "../components/Rating";
import { Container } from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { carts, addCart } = useCartStore();
  const { productId } = useParams();
  const currentProduct = products.find((product) => product.id == productId);

  const handelAddedCart = (event) => {
    event.stopPropagation();
    toast.error("Already added to cart");
  };

  const handelAddToCart = (event) => {
    event.stopPropagation();
    const cart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    addCart(cart);
    toast.success("Added to cart");
  };


  return (
    <div className="flex flex-col p-5">
      <Container>
        <BreadCrumb currentPageTitle="Product Detail" />
        <div
          className="border border-blue-400 text-gray-700 p-5 md:px-20 md:py-10 flex flex-col md:flex-row md:justify-center gap-x-20 gap-y-10 hover:shadow-xl"
          key={currentProduct.id}
        >
          <img
            src={currentProduct.image}
            alt=""
            className="h-60 mx-auto md:mx-0"
          />
          <div>
            <h4 className="font-bold">{currentProduct.title}</h4>
            <p className="my-4">{currentProduct.description}</p>
            <div className="mt-auto space-y-4">
              <button className="bg-slate-300 px-2 py-1 rounded-3xl text-xs">
                {currentProduct.category}
              </button>
              <div className="flex justify-between items-center">
                <Rating rate={currentProduct.rating.rate} />
                {/* <a href="#" className="hover:border-b hover:border-b-blue-400">
                  Reviews: {currentProduct.rating.count}
                </a> */}
              </div>
              <div className="flex justify-between items-center">
                <p className="text-black">Price ($ {currentProduct.price})</p>
                {carts.find((cart) => cart.productId === currentProduct.id) ? (
                  <button
                    onClick={handelAddedCart}
                    className="text-sm bg-blue-400 text-white rounded-3xl px-3 py-1"
                  >
                    Added
                  </button>
                ) : (
                  <button
                    onClick={handelAddToCart}
                    className="text-sm border-2 border-blue-400 rounded-3xl px-3 py-1 hover:bg-blue-400 hover:text-white"
                  >
                    Add Cart
                  </button>
                )}
                {/* <button
                  onClick={handelAddToCart}
                  className="text-sm border-2 border-blue-400 rounded-3xl px-3 py-1 hover:bg-blue-400 hover:text-white"
                >
                  Add Cart
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
