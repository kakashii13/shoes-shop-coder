import { createContext, useContext, useState, useEffect } from "react";
import getFetch from "../helpers/getFetch";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getFetch.then((resp) => setItems(resp)).catch((err) => console.log(err));
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <CartContext.Provider
      value={{
        totalProducts,
        setTotalProducts,
        items,
        setItems,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
