import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/Cart.css";
import Resume from "./Resume";

const CartPay = () => {
  return (
    <div className="pay-container">
      <section className="btn-pay">
        <Link to="/order" style={{ textDecoration: "none" }}>
          <button className="btn btn-dark d-flex align-items-center justify-content-between">
            <span>IR A PAGAR</span>
            <img src="https://icongr.am/material/arrow-right.svg?size=28&color=ffffff" />
          </button>
        </Link>
      </section>
      <Resume />
    </div>
  );
};

export default CartPay;
