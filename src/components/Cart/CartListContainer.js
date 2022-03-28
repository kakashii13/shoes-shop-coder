import React from "react";
import { useCartContext } from "../../context/CartContext";
import "../../style/Cart.css";

const CartListContainer = () => {
  const { totalProducts, setTotalProducts } = useCartContext();

  const onDelete = (size) => {
    const index = totalProducts.findIndex((prod) => prod.sizes == size);
    const newTotalProducts = [...totalProducts];
    newTotalProducts.splice(index, 1);
    setTotalProducts(newTotalProducts);
  };
  return (
    <ul className="list-container d-flex flex-column align-items-center">
      {totalProducts.map((prod) => (
        <li key={prod.newID} className="card">
          <span className="delete" onClick={() => onDelete(prod.sizes)}>
            X
          </span>
          <div className="img-container">
            <img src={prod.pictureUrl} />
          </div>
          <div className="info">
            <h4>{prod.title}</h4>
            <p>$ {prod.price},00</p>
            <p>Talle seleccionado: {prod.sizes}</p>
            <span>{prod.count} productos</span>
            <span style={{ fontWeight: "600" }}>
              Total: ${`${Number(prod.price) * Number(prod.count)},00`}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartListContainer;
