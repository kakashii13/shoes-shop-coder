import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "./CardDetail.js";
import "../../style/ItemDetail.css";
import Recomendation from "./Recomendation.js";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext.js";

const ItemDetail = () => {
  const { setLoading } = useCartContext();
  const [itemDetail, setItemDetail] = useState();
  const { Id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const queryDoc = doc(db, "items", Id);
      getDoc(queryDoc)
        .then((resp) => setItemDetail({ id: resp.id, ...resp.data() }))
        .catch((err) => console.log(err));

      setLoading(false);
    }, 2000);
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
      <section className="my-5" style={{ width: "100%" }}>
        <h4 style={{ marginLeft: "8px" }}>Nuestra recomendación para vos</h4>
        <Recomendation itemDetail={itemDetail} />
      </section>
    </div>
  );
};

export default ItemDetail;
