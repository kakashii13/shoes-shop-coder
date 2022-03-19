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
    <div className="d-flex my-4 align-items-center" style={{ width: "300px" }}>
      <div
        className="d-flex justify-content-around align-items-center my-2"
        style={{
          height: "30px",
          marginRight: "10px",
          width: "80px",
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
      <button
        className="btn btn-primary"
        style={{ height: "auto", padding: "2px 10px" }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
