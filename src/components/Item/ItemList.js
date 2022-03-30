import Item from "./Item";
import "../../style/ItemList.css";
import { useCartContext } from "../../context/CartContext";

const ItemList = () => {
  const { items } = useCartContext();
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
