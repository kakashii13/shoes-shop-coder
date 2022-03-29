import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "./CardDetail.js";
import { useCartContext } from "../../context/CartContext.js";
import "../../style/ItemDetail.css";

const ItemDetail = () => {
  const { items } = useCartContext();
  const [itemDetail, setItemDetail] = useState({});
  const { Id } = useParams();

  useEffect(() => {
    setItemDetail(items[Id]);
  }, []);

  return (
    <div className="container">
      <section>
        <CardDetail itemDetail={itemDetail} />
      </section>
      <section className="description d-flex mx-2">
        <h3>Descripción</h3>
        <p>{itemDetail?.description}</p>
      </section>
    </div>
  );
};

export default ItemDetail;
