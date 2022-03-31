import React from "react";
import "../../style/Alert.css";

const FavWidget = () => {
  return (
    <div className="alert-container alert-fav">
      <img src="https://icongr.am/fontawesome/heart-o.svg?size=21&color=ffffff" />
      <div className="alert"></div>
    </div>
  );
};

export default FavWidget;
