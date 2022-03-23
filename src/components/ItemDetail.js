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

  return (
    <div className="card card-container">
      <div className="img-container">
        <img src={itemDetail?.pictureUrl} />
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
