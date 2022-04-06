import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";

const Resume = () => {
  const [free, setFree] = useState(false);
  const { totalProductsPrice, totalProductsCount } = useCartContext();

  // setea los productos free
  useEffect(() => {
    if (totalProductsPrice > 14999) {
      setFree(true);
    }
  }, []);
  return (
    <div>
      <section className="resume-container">
        <h4>Resumen del pedido</h4>
        <p>{totalProductsCount} PRODUCTOS</p>
        <div className="d-flex justify-content-between">
          <p>Envio</p>
          <span>{(free && "Gratis") || `$${600},00`}</span>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ fontWeight: "bold" }}
        >
          <span>TOTAL</span>
          <span>
            {`${(!free && totalProductsPrice + 600) || totalProductsPrice}`},00
          </span>
        </div>
      </section>
      <section>
        <p>OPCIONES DE PAGO</p>
        <img
          style={{ width: "250px" }}
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/Logos_Argentina-sinMP_tcm216-730132.png"
        />
      </section>
    </div>
  );
};

export default Resume;
