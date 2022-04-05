import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../../style/Order.css";
import Resume from "../Cart/Resume";
import { useCartContext } from "../../context/CartContext";

const Orders = () => {
  const { totalProductsPrice, totalProducts } = useCartContext();
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    adress: "",
    email: "",
    payment: "",
  });
  const order = (e) => {
    e.preventDefault();
    const order = {};
    order.user = userData;
    order.products = totalProducts.map((prod) => {
      const id = prod.id;
      const title = prod.title;
      const price = prod.price;

      return { id, title, price };
    });
    order.total = totalProductsPrice;

    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order);
  };

  console.log(userData);

  return (
    <div className="form-container">
      <form className="form-order">
        <label>Nombre</label>
        <input
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <label>Apellido</label>
        <input
          onChange={(e) =>
            setUserData({ ...userData, surname: e.target.value })
          }
        />
        <label>Direccion</label>
        <input
          onChange={(e) => setUserData({ ...userData, adress: e.target.value })}
        />
        <label>Email</label>
        <input
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <select
          onChange={(e) =>
            setUserData({ ...userData, payment: e.target.value })
          }
        >
          <option value={true}>Metodo de pago</option>
          <option>Visa</option>
          <option>MasterCard</option>
          <option>American</option>
          <option>PagoFacil</option>
        </select>
        <button className="btn btn-dark" onClick={order}>
          Pagar
        </button>
      </form>
      <Resume />
    </div>
  );
};

export default Orders;
