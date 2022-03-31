import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../../style/CardDetail.css";

const Recomendation = ({ itemDetail }) => {
  const [newItems, setNewItems] = useState([]);

  const { items } = useCartContext();

  useEffect(() => {
    const copyItems = [...items];

    // delete prod of detail
    const indexItem = items.findIndex((item) => item.id == itemDetail?.id);
    copyItems.splice(indexItem, 1);
    setNewItems(copyItems);

    // show only 4 prod
    copyItems.splice(0, 5);
    setNewItems(copyItems);
  }, [itemDetail]);

  return (
    <ul className="recomendation-container" style={{ padding: "0" }}>
      {newItems.map((item) => (
        <li key={item.title} className="card recomendation-card">
          <div className="card-img-container">
            <img className="shoe" src={item.pictureUrl} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p>$ {item.price}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Recomendation;
