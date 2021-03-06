import React from "react";
import { Link } from "react-router-dom";
import shopping from "../../assets/shopping.jpg";
import "../../style/Cart.css";

const CartEmpty = () => {
  return (
    <div>
      <div style={{ marginLeft: "20px" }}>
        <p>Una vez que agregues algo al carrito, aparecera aca</p>
        <button
          className="btn btn-dark d-flex justify-content-between"
          style={{ width: "130px" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <span>Empezar</span>
          </Link>
          <img src="https://icongr.am/material/arrow-right.svg?size=28&color=ffffff" />
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <img className="img-cart" src={shopping} />
      </div>
    </div>
  );
};

export default CartEmpty;
