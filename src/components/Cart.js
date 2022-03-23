import React from "react";
import { useCartContext } from "../context/CartContext";
import "../style/ItemDetail.css";

const Cart = () => {
  const { totalProducts } = useCartContext();

  const totalProductsPrice = totalProducts
    .map((prod) => prod.price * prod.count)
    .reduce((el, acc) => el + acc);

  console.log(totalProducts);
  console.log(totalProductsPrice);
  return (
    <div>
      <ul>
        {totalProducts.map((prod) => (
          <li key={prod.id} className="card card-container my-4">
            <div className="img-container">
              <img src={prod.pictureUrl} />
            </div>
            <div className="info-container">
              <h3>{prod.title}</h3>
              <p>$ {prod.price},00</p>
              <span>Cantidad: {prod.count}</span>
              <span style={{ fontWeight: "bold" }}>
                Total: ${`${Number(prod.price) * Number(prod.count)},00`}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h4>Resumen del pedido</h4>
        <div>
          <section>
            <div>2 productos</div>
            <div>total: {totalProductsPrice}</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cart;
