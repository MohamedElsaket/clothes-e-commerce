import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCommonComp from "../common/ProductCommonComp";
import ItemCommonComp from "../common/ItemCommonComp";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <ProductCommonComp text1="latest" text2="collections">
      {latestProducts.map((item) => (
        <ItemCommonComp key={item._id} item={item} />
      ))}
    </ProductCommonComp>
  );
};

export default LatestCollections;
