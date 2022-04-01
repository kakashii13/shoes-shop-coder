import { useCartContext } from "../../context/CartContext";

const useFavs = () => {
  const { items, setItems } = useCartContext();
  const addFav = (id) => {
    const newItems = [...items];
    const findIndex = items.findIndex((item) => item.id === id);
    newItems[findIndex].fav = !newItems[findIndex].fav;
    setItems(newItems);
  };

  return { addFav };
};

export default useFavs;
