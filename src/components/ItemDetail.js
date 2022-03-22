import { useState, useEffect } from "react";
import getFetch from "../helpers/getFetch.js";
import ItemCount from "./ItemCount.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/ItemDetail.css";

const ItemDetail = () => {
  const [itemDetail, setItemDetail] = useState({});
  const [addCart, setAddCart] = useState(false);
  const [isSize, setIsSize] = useState(false);
  const { Id } = useParams();
  useEffect(() => {
    getFetch
      .then((response) => setItemDetail(response[Id]))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="card card-container">
      <div className="img-container">
        <img src={itemDetail.pictureUrl} />
      </div>
      <div className="info-container">
        <h3>{itemDetail.title}</h3>
        <p>{itemDetail.price}</p>
        <p>Talle:</p>
        <ul className="detail-size">
          {itemDetail.sizes?.map((size) => (
            <li className="size" key={size}>
              {size}
            </li>
          ))}
        </ul>
        {(!addCart && <ItemCount setAddCart={setAddCart} />) || (
          <div>
            <Link to="/cart">
              <button className="btn btn-warning my-2 me-2">Ver carrito</button>
            </Link>
            <Link to="/">
              <button className="btn btn-dark">Seguir comprando</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
