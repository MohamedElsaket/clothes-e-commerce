import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCommonComp from "../common/ProductCommonComp";
import ItemCommonComp from "../common/ItemCommonComp";

const BestSellers = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    setBestSellers(
      products.filter((item) => item.bestseller == true).slice(0, 5)
    );
  }, []);

  return (
    <ProductCommonComp text1="best" text2="sellers">
      {bestSellers.map((item) => (
        <ItemCommonComp key={item._id} item={item} />
      ))}
    </ProductCommonComp>
  );
};

export default BestSellers;
