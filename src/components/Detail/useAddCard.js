import { useState } from "react";
import { useCartContext } from "../../context/CartContext.js";

const useAddCard = (itemDetail) => {
  const { totalProducts, setTotalProducts } = useCartContext();
  const [addCart, setAddCart] = useState(false);
  const [sizeActive, setSizeActive] = useState(null);
  const [error, setError] = useState(false);

  // seteo un size
  const onSize = (size) => {
    setSizeActive(size);
  };

  // funcion agregar al carrito
  const onAddCart = (countState) => {
    if (countState == 0 || sizeActive == null) setError(true);
    // validacion
    if (countState != 0 && sizeActive != null) {
      setError(false);
      setAddCart(true);
      // chequeo prod existe
      const isProduct = totalProducts.some((prod) => prod.id === itemDetail.id);
      // si no existe, se crea
      if (!isProduct) {
        setTotalProducts([
          ...totalProducts,
          {
            ...itemDetail,
            count: countState,
            stock: itemDetail.stock - countState,
            sizes: sizeActive,
            newID: itemDetail.id + sizeActive,
          },
        ]);
      } else {
        // validacion si existe el talle del prod
        const isSize = [...totalProducts]
          .filter((x) => x.id == itemDetail.id)
          .map(({ sizes }) => sizes)
          .find((x) => x == sizeActive);
        // si existe, aumenta el count
        if (isSize == sizeActive) {
          // busqueda por index
          const productIndex = totalProducts.findIndex(
            ({ newID }) => newID == itemDetail.id + sizeActive
          );
          const copyArr = [...totalProducts];
          // aumenta el count
          copyArr[productIndex].count += countState;
          // seteo el nuevo array
          setTotalProducts(copyArr);
        } else {
          // si no existe, se agrega un nuevo talle
          setTotalProducts([
            ...totalProducts,
            {
              ...itemDetail,
              count: countState,
              stock: itemDetail.stock - countState,
              sizes: sizeActive,
              newID: itemDetail.id + sizeActive,
            },
          ]);
        }
      }
    }
  };

  return {
    addCart,
    onSize,
    onAddCart,
    sizeActive,
    error,
  };
};

export default useAddCard;
