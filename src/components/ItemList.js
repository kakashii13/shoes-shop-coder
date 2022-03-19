import { useEffect, useState } from "react";
import getFetch from "../helpers/getFetch";
import Item from "./Item";
import "../style/ItemList.css";

const ItemList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getFetch.then((resp) => setItems(resp)).catch((err) => console.log(err));
  }, []);
  return (
    <ul className="ItemList">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          pictureUrl={item.pictureUrl}
        ></Item>
      ))}
    </ul>
  );
};

export default ItemList;
