import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../../style/Order.css";
import Resume from "../Cart/Resume";
import { useCartContext } from "../../context/CartContext";

const Orders = () => {
  const { totalProductsPrice, totalProducts } = useCartContext();
  const [incomplete, setIncomplete] = useState(false);
  const [complete, setComplete] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    payment: "",
  });

  const order = (event) => {
    event.preventDefault();
    if (
      userData.name == "" ||
      userData.surname == "" ||
      userData.email == "" ||
      userData.payment == ""
    )
      return;
    setComplete(true);
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
    addDoc(queryCollection, order).then((resp) => console.log(resp));
  };
  if (complete) alert("Felicidades, ya realizaste tu pedido!");

  return (
    <div className="form-container container">
      <form className="form-order" onSubmit={order}>
        <label>Nombre</label>
        <input
          className={`${incomplete && "input--active"}`}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        {incomplete && <p className="incomplete">*Campo obligatorio</p>}
        <label>Apellido</label>
        <input
          className={`${incomplete.surname && "input--active"}`}
          onChange={(e) =>
            setUserData({ ...userData, surname: e.target.value })
          }
        />
        {incomplete && <p className="incomplete">*Campo obligatorio</p>}
        <label>Email</label>
        <input
          className={`${incomplete.email && "input--active"}`}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        {incomplete && <p className="incomplete">*Campo obligatorio</p>}
        <label>Metodo de pago</label>
        <select
          onChange={(e) =>
            setUserData({ ...userData, payment: e.target.value })
          }
        >
          <option>Visa</option>
          <option>MasterCard</option>
          <option>American</option>
          <option>PagoFacil</option>
        </select>
        <button className="btn btn-dark" type="submit">
          Pagar
        </button>
      </form>
      <div className="resume">
        <Resume />
      </div>
    </div>
  );
};

export default Orders;
