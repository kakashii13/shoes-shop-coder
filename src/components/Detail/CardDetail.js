import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount.js";
import ImgContainer from "./ImgContainer.js";
import "../../style/CardDetail.css";
import useAddCard from "./useAddCard.js";
import useFavs from "../Favs/useFavs";

const CardDetail = ({ itemDetail }) => {
  const { addCart, onSize, onAddCart, sizeActive, error } =
    useAddCard(itemDetail);
  const { addFav } = useFavs();
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
                style={{ listStyle: "none", cursor: "pointer" }}
                onClick={() => onSize(size)}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex">
          {(!addCart && <ItemCount onAddCart={onAddCart} />) || (
            <div style={{ width: "270px" }}>
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
          <img
            onClick={() => addFav(itemDetail?.id)}
            style={{
              width: "25px",
              cursor: "pointer",
            }}
            src={
              !itemDetail?.fav
                ? "https://icongr.am/fontawesome/heart-o.svg?size=14&color=currentColor"
                : "https://icongr.am/fontawesome/heart.svg?size=14&color=currentColor"
            }
          />
        </div>

        {error ? (
          <p style={{ color: "#d64949" }}>Debe seleccionar talle y cantidad</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CardDetail;
