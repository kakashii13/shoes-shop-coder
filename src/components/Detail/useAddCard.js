import { useState } from "react";
import { useCartContext } from "../../context/CartContext.js";

const useAddCard = (itemDetail) => {
  const { totalProducts, setTotalProducts } = useCartContext();
  const [addCart, setAddCart] = useState(false);
  const [sizeActive, setSizeActive] = useState(null);

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
          copyArr[productIndex].count += countState;
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

  return {
    addCart,
    onSize,
    onAddCart,
    sizeActive,
  };
};

export default useAddCard;
