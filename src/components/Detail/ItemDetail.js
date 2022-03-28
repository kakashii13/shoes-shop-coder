import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "./CardDetail.js";
import { useCartContext } from "../../context/CartContext.js";
import "../../style/ItemDetail.css";

const ItemDetail = () => {
  const { items, totalProducts, setTotalProducts } = useCartContext();
  const [itemDetail, setItemDetail] = useState({});
  const [addCart, setAddCart] = useState(false);
  const [sizeActive, setSizeActive] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const { Id } = useParams();

  useEffect(() => {
    setItemDetail(items[Id]);
  }, []);

  const onSize = (size) => {
    setSizeActive(size);
  };

  const onAddCart = (countState) => {
    if (countState != 0 && sizeActive != null) {
      setAddCart(true);
      const isProduct = totalProducts.some((prod) => prod.id === itemDetail.id);
      if (!isProduct) {
        setTotalProducts([
          ...totalProducts,
          {
            ...itemDetail,
            count: countState,
            stock: itemDetail.stock - countState,
            sizes: sizeActive,
            newID: Number(itemDetail.id + sizeActive),
          },
        ]);
      } else {
        const isSize = [...totalProducts]
          .filter((x) => x.id == itemDetail.id)
          .map(({ sizes }) => sizes)
          .find((x) => x == sizeActive);
        if (isSize == sizeActive) {
          const productIndex = totalProducts.findIndex(
            ({ newID }) => newID == Number(itemDetail.id + sizeActive)
          );
          const copyArr = [...totalProducts];
          const addCount = (copyArr[productIndex].count += countState);
          setTotalProducts(copyArr);
        } else {
          setTotalProducts([
            ...totalProducts,
            {
              ...itemDetail,
              count: countState,
              stock: itemDetail.stock - countState,
              sizes: sizeActive,
              newID: Number(itemDetail.id + sizeActive),
            },
          ]);
        }
      }
    }
  };

  const handleImage = (arrow) => {
    if (arrow === "left") {
      if (currentImage != 0) {
        setCurrentImage((currentImage) => currentImage - 1);
      } else {
        setCurrentImage(2);
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
          onSize={onSize}
          sizeActive={sizeActive}
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
