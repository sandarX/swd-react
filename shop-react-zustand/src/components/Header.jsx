/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const {carts} = useCartStore();
  return (
    <header className="p-5">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"} className="logo text-3xl uppercase text-gray-600">Store</Link>
          <Link to={"/my-cart"} className="border border-blue-400 text-gray-600 px-4 py-2 relative">
            My Cart
            <span className="bg-red-600 text-white px-3 py-1 rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              {carts.length}
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
