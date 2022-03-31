import React from "react";
import { useCartContext } from "../../context/CartContext";
import FavsContainer from "./FavsContainer";

const Favs = () => {
  const { items } = useCartContext();
  const itemsFavs = [...items].filter((item) => item.fav == true);
  return (
    <div style={{ minHeight: "74.3%" }} className="container fav-container">
      <h2>Tu lista de deseos</h2>
      <div>
        <p>{itemsFavs.length} ARTÍCULOS</p>
        {(itemsFavs.length == "" && (
          <p>
            Aún no has añadido ningún artículo a tu lista de deseos. Comenzá a
            comprar y añadí tus favoritos.
          </p>
        )) ||
          ""}
      </div>
      <FavsContainer itemsFavs={itemsFavs} />
    </div>
  );
};

export default Favs;
