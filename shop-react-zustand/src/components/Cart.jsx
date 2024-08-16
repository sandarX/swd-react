/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();

  const product = products.find((product) => product.id === productId);

  const cost = product.price * quantity;

  const handelIncrement = () => {
    increaseQuantity(id);
  };

  const handelDecrement = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "Once removed, this product can't be added back automatically!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Remove Item!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("Product removed from cart");
        }
      });
    }
  };

  return (
    <div className=" border border-blue-400 p-5 grid grid-cols-6 hover:border-2 transition ease-in-out duration-300">
      <div className="col-span-1">
        <img src={product.image} className="h-20 pe-5" alt="" />
      </div>
      <div className="col-span-3">
        <p className="font-bold mb-3 pe-5">{product.title}</p>
        <p className="text-gray-700">Price ($ {product.price})</p>
      </div>
      <div className="col-span-1">
        <p className="mb-3">Quantity</p>
        <div className="flex items-center gap-3">
          <button onClick={handelDecrement} className="bg-blue-400 text-white p-1 rounded-full hover:bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-5 stroke-1"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <span className="text-lg">{quantity}</span>
          <button onClick={handelIncrement} className="bg-blue-400 text-white p-1 rounded-full hover:bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-5 stroke-1"
            >
              <path d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
      <div className=" col-span-1">
        <p className=" text-end text-2xl font-bold mt-3">$ {cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
