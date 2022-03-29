import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  const totalProductsAlert = totalProducts
    ?.map((prod) => prod.count)
    .reduce((el, acc) => el + acc, null);

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
          width: "14px",
          position: "absolute",
          right: "49.7%",
          top: "12px",
          fontSize: "10px",
        }}
      >
        {totalProductsAlert}
      </div>
    </div>
  );
};

export default CartWidget;
