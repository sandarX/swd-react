/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import CartSection from "../components/CartSection";

const MyCart = () => {
  return (
    <Container className="p-5">
      <BreadCrumb currentPageTitle="My Cart" />
      <CartSection />
    </Container>
  );
};

export default MyCart;
