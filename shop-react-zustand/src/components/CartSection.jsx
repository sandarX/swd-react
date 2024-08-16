/* eslint-disable no-unused-vars */
import React from "react";
// import products from "../data/product";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import emptyCart from "../assets/empty-cart.svg";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const price = products.find(({ id }) => id === cv.productId).price;
    const cost = cv.quantity * price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <>
      <div className="flex flex-col gap-5">
        {carts.length === 0 ? (
          <div>
            <img
              src={emptyCart}
              alt="empty cart"
              className="w-1/2 lg:w-1/3 mx-auto"
            />
            <p className="text-center lg:text-lg">No items in your cart.</p>
            <p className="text-center lg:text-lg">
              <Link to={`/`} className="underline hover:text-blue-400">Start shopping</Link> now to
              add your favorites!
            </p>
          </div>
        ) : (
          carts.map((cart) => <Cart key={cart.id} cart={cart} />)
        )}

        <div className="mt-10  w-full bg-white">
          <div className=" border-t border-blue-600 flex justify-end gap-10 py-3">
            <div className="text-right">
              <p className="text-blue-700 mb-1">Total</p>
              <p className="mb-2 text-xl font-bold">{total.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-700 mb-1">Tax(5%)</p>
              <p className="mb-2 text-xl font-bold">{tax.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-700 mb-1">Net Total</p>
              <p className="mb-2 text-3xl font-bold">{netTotal.toFixed(2)}</p>
            </div>
          </div>
          <div className=" text-end my-3">
            <Link className="text-white bg-blue-500 px-4 py-2 hover:bg-blue-600">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
