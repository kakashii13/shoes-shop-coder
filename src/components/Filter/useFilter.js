import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const useFilter = () => {
  const { brand } = useParams();
  const { items } = useCartContext();
  const [itemFilter, setItemFilter] = useState(items);
  const brandFilter = items.filter((item) => item.brand == brand);

  useEffect(() => {
    if (brand) {
      setItemFilter(brandFilter);
    } else return;
  }, [brand]);
  return {
    itemFilter,
  };
};

export default useFilter;
