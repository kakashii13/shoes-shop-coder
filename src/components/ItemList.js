import { useEffect, useState } from "react";
import getFetch from "../helpers/getFetch";
import Item from "./Item";

const ItemList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getFetch.then((resp) => setItems(resp)).catch((err) => console.log(err));
  }, []);
  return (
    <ul
      style={{
        margin: "20px 0",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRow: "repeat(5, 1fr)",
        gridGap: "10px",
      }}
    >
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
