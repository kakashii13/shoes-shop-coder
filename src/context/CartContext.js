import { createContext, useContext, useState, useEffect } from "react";
import getFetch from "../helpers/getFetch";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     getFetch.then((resp) => setItems(resp)).catch((err) => console.log(err));
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();

      const queryCollection = collection(db, "items");

      getDocs(queryCollection)
        .then((resp) =>
          setItems(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch((err) => console.log(err));

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
        setLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
