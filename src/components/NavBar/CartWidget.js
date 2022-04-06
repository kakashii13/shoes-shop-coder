import { useCartContext } from "../../context/CartContext";
import "../../style/Alert.css";

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  // funcion para sumar los prod y agregarlos al cartWidget
  const totalProductsAlert = totalProducts
    ?.map((prod) => prod.count)
    .reduce((el, acc) => el + acc, null);

  return (
    <div className="alert-container">
      <img
        src="https://icongr.am/material/cart-outline.svg?size=22&color=ffffff"
        className="ms-2"
      />
      {(totalProductsAlert && (
        <div className="alert">{totalProductsAlert}</div>
      )) ||
        ""}
    </div>
  );
};

export default CartWidget;
