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
    </div>
  );
};

export default CartWidget;
