import { useState } from "react";

const ItemCount = () => {
  const [state, setState] = useState(1);
  const stock = 5;

  const handleAdd = () => {
    if (state < stock) {
      setState(state + 1);
    }
  };

  const handleLess = () => {
    if (!state < 1) {
      setState(state - 1);
    }
  };

  return (
    <div
      style={{
        padding: "10px",
        // width: "200px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "10px 0",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <span
          onClick={handleLess}
          style={{
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          -
        </span>
        <div>{state}</div>
        <span
          onClick={handleAdd}
          style={{
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          +
        </span>
      </div>
      <button className="btn btn-primary">Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
