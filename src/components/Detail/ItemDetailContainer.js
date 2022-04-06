import ItemDetail from "./ItemDetail";
import Loading from "../Loading/Loading";
import { useCartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const { loading } = useCartContext();
  return <div>{(loading && <Loading />) || <ItemDetail />}</div>;
};

export default ItemDetailContainer;
