import React, { useState } from "react";

const ImgContainer = ({ itemDetail }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // funcion carrusel de img
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
      {itemDetail?.price > 14999 && <p>Envio Gratis</p>}
    </div>
  );
};

export default ImgContainer;
