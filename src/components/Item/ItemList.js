import Item from "./Item";
import "../../style/ItemList.css";
import useFilter from "../Filter/useFilter";
import { useCartContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const { items } = useCartContext();
  const { itemFilter } = useFilter();
  const { brand } = useParams();

  return (
    <ul className="ItemList">
      {(!brand &&
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            pictureUrl={item.pictureUrl}
          ></Item>
        ))) ||
        itemFilter.map((item) => (
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
