import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount.js";
import ImgContainer from "./ImgContainer.js";
import "../../style/CardDetail.css";
import useAddCard from "./useAddCard.js";

const CardDetail = ({ itemDetail }) => {
  const { addCart, onSize, onAddCart, sizeActive } = useAddCard(itemDetail);
  return (
    <div className="card-container">
      <ImgContainer itemDetail={itemDetail} />
      <div className="info-container">
        <h3>{itemDetail?.title}</h3>
        <p className="price">$ {itemDetail?.price}</p>
        <div className="size-container">
          <p>Talles disponibles</p>
          <ul className="detail-size">
            {itemDetail?.sizes?.map((size) => (
              <li
                className={`size ${size == sizeActive && "size-active"}`}
                key={size}
                style={{ listStyle: "none" }}
                onClick={() => onSize(size)}
              >
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
