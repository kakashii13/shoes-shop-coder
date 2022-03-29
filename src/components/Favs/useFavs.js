import { useCartContext } from "../../context/CartContext";

const useFavs = (id) => {
  const { items, setItems } = useCartContext();
  const addFav = () => {
    const newItems = [...items];
    newItems[id].fav = !newItems[id].fav;
    setItems(newItems);
  };

  return { addFav };
};

export default useFavs;
