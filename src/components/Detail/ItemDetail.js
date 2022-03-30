import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "./CardDetail.js";
import { useCartContext } from "../../context/CartContext.js";
import "../../style/ItemDetail.css";
import Recomendation from "./Recomendation.js";

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
      <section className="my-5 mx-2" style={{ width: "100%" }}>
        <h4 style={{ marginLeft: "8px" }}>Nuestra recomendación para vos</h4>
        <Recomendation itemDetail={itemDetail} />
      </section>
    </div>
  );
};

export default ItemDetail;
