import { createContext, useContext, useState, useEffect } from "react";
import getFetch from "../helpers/getFetch";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  let totalProductsPrice = null;
  let totalProductsCount = null;

  if (totalProducts != "") {
    totalProductsPrice = totalProducts
      .map((prod) => prod.price * prod.count)
      .reduce((el, acc) => el + acc);

    totalProductsCount = totalProducts
      .map((prod) => prod.count)
      .reduce((el, acc) => el + acc);
  }

  return (
    <CartContext.Provider
      value={{
        totalProducts,
        setTotalProducts,
        items,
        setItems,
        loading,
        setLoading,
        totalProductsPrice,
        totalProductsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
