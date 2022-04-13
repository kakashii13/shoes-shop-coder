import ItemList from "./ItemList";
import { useCartContext } from "../../context/CartContext";
import Loading from "../Loading/Loading";
import Filter from "../Filter/Filter";

const ItemListContainer = () => {
  const { loading } = useCartContext();
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "81.5%" }}
    >
      {(loading && <Loading />) || (
        <div>
          <Filter />
          <ItemList />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
