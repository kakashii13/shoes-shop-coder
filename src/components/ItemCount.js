import { useState } from "react";
import "../style/ItemCount.css";
const ItemCount = ({ onAddCart }) => {
  const [state, setState] = useState(0);

  const handleAdd = () => {
    if (state < 5) {
      setState(state + 1);
    }
  };

  const handleLess = () => {
    if (!state < 1) {
      setState(state - 1);
    }
  };

  return (
    <div className="d-flex my-4 align-items-center" style={{ width: "270px" }}>
      <div className="d-flex justify-content-around align-items-center my-2 count-container">
        <span onClick={handleLess}>-</span>
        <div>{state}</div>
        <span onClick={handleAdd}>+</span>
      </div>
      <button onClick={() => onAddCart(state)} className="btn btn-warning">
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;
