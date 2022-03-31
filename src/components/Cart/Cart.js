import React from "react";
import { useCartContext } from "../../context/CartContext";
import CartListContainer from "./CartListContainer";
import "../../style/Cart.css";
import CartEmpty from "./CartEmpty";
import CartPay from "./CartPay";

const Cart = () => {
  const { totalProducts } = useCartContext();
  console.log(totalProducts);
  return (
    <div className="container" style={{ minHeight: "82%" }}>
      <h3 style={{ marginLeft: "19px" }}>
        {(totalProducts != "" && "TU CARRITO") || "EL CARRITO ESTA VACIO"}
      </h3>
      {(totalProducts != "" && (
        <div className="cart-container">
          <CartListContainer />
          <CartPay />
        </div>
      )) || <CartEmpty />}
    </div>
  );
};

export default Cart;
