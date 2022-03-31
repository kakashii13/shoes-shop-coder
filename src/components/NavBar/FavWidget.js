import React from "react";
import { useCartContext } from "../../context/CartContext";
import "../../style/Alert.css";

const FavWidget = () => {
  const { items } = useCartContext();

  const favCounts = items.filter((item) => item.fav == true).length;

  return (
    <div className="alert-container alert-fav">
      <img src="https://icongr.am/fontawesome/heart-o.svg?size=21&color=ffffff" />
      {favCounts != 0 && <div className="alert">{favCounts}</div>}
    </div>
  );
};

export default FavWidget;
