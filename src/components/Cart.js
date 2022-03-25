import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../style/ItemDetail.css";
import shopping from "../assets/shopping.jpg";

const Cart = () => {
  const { totalProducts, setTotalProducts } = useCartContext();

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

  const onDelete = (id) => {
    const index = totalProducts.findIndex((prod) => prod.id == id);
    const newTotalProducts = [...totalProducts];
    newTotalProducts.splice(index, 1);
    setTotalProducts(newTotalProducts);
    console.log(newTotalProducts);
  };
  return (
    <div className="container">
      <h3 style={{ marginLeft: "30px", fontWeight: "bold" }}>
        {(totalProducts != "" && "TU CARRITO") || "EL CARRITO ESTA VACIO"}
      </h3>
      {(totalProducts != "" && (
        <div className="d-flex">
          <ul>
            {totalProducts.map((prod) => (
              <li key={prod.id} className="card card-container my-4">
                <span
                  style={{
                    fontWeight: "bold",
                    position: "absolute",
                    right: "20px",
                    zIndex: "1",
                  }}
                  onClick={() => onDelete(prod.id)}
                >
                  X
                </span>
                <div className="img-container">
                  <img
                    src={prod.pictureUrl}
                    style={{ width: "240px", height: "240px" }}
                  />
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
          <div className="my-4">
            <div>
              <section>
                <button
                  className="btn btn-dark d-flex align-items-center justify-content-between"
                  style={{ width: "100%" }}
                >
                  <span>IR A PAGAR</span>
                  <img src="https://icongr.am/material/arrow-right.svg?size=28&color=ffffff" />
                </button>
              </section>
              <section
                style={{
                  border: "1px solid #ddd",
                  padding: "10px 20px",
                  margin: "10px 0",
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>Resumen del pedido</h4>
                <div>{totalProductsCount} PRODUCTOS</div>
                <div
                  className="d-flex justify-content-between my-2"
                  style={{ fontWeight: "bold" }}
                >
                  <span>TOTAL</span>
                  <span>$ {totalProductsPrice},00</span>
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
          </div>
        </div>
      )) || (
        <div style={{ marginLeft: "30px" }}>
          <div>
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
            <img
              className="img-cart"
              src={shopping}
              style={{ height: "500px", width: "700px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
