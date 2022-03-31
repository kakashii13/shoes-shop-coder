import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "../../style/Cart.css";

const CartPay = () => {
  const [free, setFree] = useState(false);
  const { totalProducts } = useCartContext();
  let totalProductsPrice = null;
  let totalProductsCount = null;

  if (totalProducts != "") {
    totalProductsPrice = totalProducts
      .map((prod) => prod.price * prod.count)
      .reduce((el, acc) => el + acc);

    totalProductsCount = totalProducts
      .map((prod) => prod.count)
      .reduce((el, acc) => el + acc);
  }

  useEffect(() => {
    if (totalProductsPrice > 14999) {
      setFree(true);
    }
  }, []);

  return (
    <div className="pay-container">
      <section className="btn-pay">
        <button className="btn btn-dark d-flex align-items-center justify-content-between">
          <span>IR A PAGAR</span>
          <img src="https://icongr.am/material/arrow-right.svg?size=28&color=ffffff" />
        </button>
      </section>
      <section className="resume-container">
        <h4>Resumen del pedido</h4>
        <p>{totalProductsCount} PRODUCTOS</p>
        <div className="d-flex justify-content-between">
          <p>Envio</p>
          <span>{(free && "Gratis") || `$${600},00`}</span>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ fontWeight: "bold" }}
        >
          <span>TOTAL</span>
          <span>
            {`${(!free && totalProductsPrice + 600) || totalProductsPrice}`},00
          </span>
        </div>
      </section>
      <section>
        <p>OPCIONES DE PAGO</p>
        <img
          style={{ width: "250px" }}
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/Logos_Argentina-sinMP_tcm216-730132.png"
        />
      </section>
    </div>
  );
};

export default CartPay;
