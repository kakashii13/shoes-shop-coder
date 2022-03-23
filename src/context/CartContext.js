import { createContext, useContext, useState, useEffect } from "react";
import getFetch from "../helpers/getFetch";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);

  useEffect(() => {
    getFetch.then((resp) => setItems(resp)).catch((err) => console.log(err));
  }, []);

  return (
    <CartContext.Provider value={{ totalProducts, setTotalProducts, items }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
