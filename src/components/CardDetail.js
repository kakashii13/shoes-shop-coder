import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount.js";
import "../style/CardDetail.css";

const CardDetail = ({
  handleImage,
  itemDetail,
  onAddCart,
  addCart,
  currentImage,
}) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img
          className="arrow arrow-left"
          src="https://icongr.am/fontawesome/angle-left.svg?size=30&color=currentColor"
          onClick={() => handleImage("left")}
        />
        <img src={itemDetail?.picturesDetail?.[currentImage]} />
        <img
          className="arrow arrow-right"
          src="https://icongr.am/fontawesome/angle-right.svg?size=30&color=currentColor"
          onClick={() => handleImage("right")}
        />
        {itemDetail?.price > 14999 && <p>Envio Gratis</p>}
      </div>
      <div className="info-container">
        <h3>{itemDetail?.title}</h3>
        <p className="price">$ {itemDetail?.price}</p>
        <div className="size-container">
          <p>Talles disponibles</p>
          <ul className="detail-size">
            {itemDetail?.sizes?.map((size) => (
              <li className="size" key={size} style={{ listStyle: "none" }}>
                {size}
              </li>
            ))}
          </ul>
        </div>
        {(!addCart && <ItemCount onAddCart={onAddCart} />) || (
          <div style={{ width: "300px" }}>
            <Link to="/">
              <button className="btn btn-dark  my-2 me-2">
                Seguir comprando
              </button>
            </Link>
            <Link to="/cart">
              <button
                className="btn btn-warning"
                style={{ padding: "6px 12px" }}
              >
                Ver carrito
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDetail;
