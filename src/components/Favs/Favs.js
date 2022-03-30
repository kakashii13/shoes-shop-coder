import React from "react";
import { useCartContext } from "../../context/CartContext";
import Item from "../Item/Item";

const Favs = () => {
  const { items } = useCartContext();
  const itemsFavs = [...items].filter((item) => item.fav == true);
  return (
    <ul>
      {itemsFavs.map((item) => (
        <li className="card" key={item.id}>
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

export default Favs;
