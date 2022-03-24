import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount.js";
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
    <div className="card-container">
      <div className="img-container">
        <img
          className="arrow arrow-left"
          src="https://icongr.am/fontawesome/angle-left.svg?size=30&color=currentColor"
          onClick={() => handleImage("left")}
        />
        <img src={itemDetail?.picturesDetail?.[currentImage]} />
        <img
          className="arrow arrow-right"
          src="https://icongr.am/fontawesome/angle-right.svg?size=30&color=currentColor"
          onClick={() => handleImage("right")}
        />
        {itemDetail?.price > 14999 && (
          <p
            style={{
              margin: "0",
              position: "absolute",
              top: "45px",
              right: "-25px",
              border: "1px solid #000",
              padding: "2px 3px",
              transform: "rotate(-90deg)",
              letterSpacing: "2px",
            }}
          >
            Envio Gratis
          </p>
        )}
      </div>
      <div className="info-container">
        <h3>{itemDetail?.title}</h3>
        <p>$ {itemDetail?.price}</p>
        <p>Talle:</p>
        <ul className="detail-size">
          {itemDetail?.sizes?.map((size) => (
            <li className="size" key={size} style={{ listStyle: "none" }}>
              {size}
            </li>
          ))}
        </ul>
        {(!addCart && <ItemCount onAddCart={onAddCart} />) || (
          <div>
            <Link to="/">
              <button className="btn btn-dark  my-2 me-2">
                Seguir comprando
              </button>
            </Link>
            <Link to="/cart">
              <button className="btn btn-warning">Ver carrito</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
