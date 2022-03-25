import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "./CardDetail.js";
import { useCartContext } from "../context/CartContext.js";
import "../style/ItemDetail.css";

const ItemDetail = () => {
  const { items, totalProducts, setTotalProducts } = useCartContext();
  const [itemDetail, setItemDetail] = useState({});
  const [addCart, setAddCart] = useState(false);
  const [isSize, setIsSize] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { Id } = useParams();

  useEffect(() => {
    setItemDetail(items[Id]);
  }, []);

  const onAddCart = (x) => {
    if (x != 0) {
      setAddCart(true);
      totalProducts.some((prod) => prod.id === itemDetail.id)
        ? setTotalProducts(
            [...totalProducts],
            (totalProducts[itemDetail.id].stock -= x),
            (totalProducts[itemDetail.id].count += x)
          )
        : setTotalProducts([
            ...totalProducts,
            { ...itemDetail, count: x, stock: itemDetail.stock - x },
          ]);
    }
  };

  const handleImage = (arrow) => {
    if (arrow === "left") {
      if (currentImage != 0) {
        setCurrentImage((currentImage) => currentImage - 1);
      }
    } else {
      if (currentImage < 2) {
        setCurrentImage((currentImage) => currentImage + 1);
      } else {
        setCurrentImage(0);
      }
    }
  };

  return (
    <div className="container">
      <section>
        <CardDetail
          onAddCart={onAddCart}
          handleImage={handleImage}
          itemDetail={itemDetail}
          addCart={addCart}
          currentImage={currentImage}
        />
      </section>
      <section className="description d-flex mx-2">
        <h3>Descripción</h3>
        <p>{itemDetail?.description}</p>
      </section>
    </div>
  );
};

export default ItemDetail;
