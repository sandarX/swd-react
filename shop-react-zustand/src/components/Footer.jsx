/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "./Container";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="px-5 mt-auto">
      <Container>
        <p className="text-center bg-blue-600 text-white py-2">
          <span className="text-slate-200">&copy;</span> {date}{" "}
          <a
            href="https://fakestoreapi.com/" target="_blank"
            className=" underline text-slate-200"
          >
            Store
          </a>
          . All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
