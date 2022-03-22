const CartWidget = () => {
  return (
    <div>
      <img
        src="https://icongr.am/material/cart-outline.svg?size=22&color=ffffff"
        className="ms-2"
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "18px",
          right: "50%",
        }}
      />
      <div
        style={{
          borderRadius: "50%",
          background: "#FBCA2D",
          color: "#000",
          textAlign: "center",
          // padding: "2px 6px",
          width: "14px",
          position: "absolute",
          right: "49.7%",
          top: "12px",
          opacity: "0.9",
          fontSize: "10px",
        }}
      >
        1
      </div>
    </div>
  );
};

export default CartWidget;
