import React from "react";
import { useCartContext } from "../../context/CartContext";
import "../../style/Cart.css";

const CartListContainer = () => {
  const { totalProducts, setTotalProducts } = useCartContext();

  // function para eliminar products
  const onDelete = (size) => {
    //busco el index
    const index = totalProducts.findIndex((prod) => prod.sizes == size);
    //copia array
    const newTotalProducts = [...totalProducts];
    //elimino el
    newTotalProducts.splice(index, 1);
    //seteo el nuevo array
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

      <button className="btn btn-dark" onClick={() => setTotalProducts([])}>
        Vaciar carrito
      </button>
    </ul>
  );
};

export default CartListContainer;
