import React, { useEffect, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const useOrder = () => {
  const { totalProductsPrice, totalProducts, setTotalProducts } =
    useCartContext();
  const [complete, setComplete] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    payment: "",
  });
  const [orderId, setOrderId] = useState("");

  // cambiar ruta a /
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  // function get order
  const order = (e) => {
    e.preventDefault();
    if (
      userData.name == "" ||
      userData.surname == "" ||
      userData.email == "" ||
      userData.payment == ""
    )
      return;
    const order = {};
    order.user = userData;
    order.products = totalProducts.map((prod) => {
      const id = prod.id;
      const title = prod.title;
      const price = prod.price;

      return { id, title, price };
    });
    order.total = totalProductsPrice;

    // envio obj a firebase con los datos de la compra
    const db = getFirestore();
    const queryCollection = collection(db, "orders");

    addDoc(queryCollection, order).then(({ id }) => {
      setOrderId(id);
    });
    setComplete(true);
    setTimeout(() => {
      routeChange();
      setTotalProducts([]);
    }, 2000);
  };
  useEffect(() => {
    if (complete)
      alert(
        `Felicidades, has realizado tu pedido!. El id de tu compra es ${orderId}`
      );
  }, [orderId]);

  return { userData, setUserData, order };
};

export default useOrder;
