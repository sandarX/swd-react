/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  },
}) => {
  const { carts, addCart } = useCartStore();
  const navigate = useNavigate();

  const handelAddedCart = (event) => {
    event.stopPropagation();
    toast.error("Already added to cart");
  };

  const handelAddToCart = (event) => {
    event.stopPropagation();
    const cart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(cart);
     toast.success("Added to cart");
  };

  const handelOpenDetail = (event) => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <div
      onClick={handelOpenDetail}
      className="border border-blue-400 text-gray-700 p-5 flex flex-col gap-y-2 hover:shadow-xl hover:scale-105 duration-300"
      key={id}
    >
      <img src={image} alt="" className="h-52 mx-auto" />
      <h4 className="font-bold">{title}</h4>
      <div className="mt-auto space-y-2">
        <button className="bg-slate-300 px-2 py-1 rounded-3xl text-xs">
          {category}
        </button>
        <div className="flex justify-between items-center">
          <Rating rate={rate} />
          {/* <a href="#" className="hover:border-b hover:border-b-blue-400">
            Reviews: {count}
          </a> */}
        </div>
        <div className="flex justify-between items-center">
          <p>Price ($ {price})</p>
          {carts.find((cart) => cart.productId === id) ? (
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
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
