import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCommonComp from "../common/ProductCommonComp";
import ItemCommonComp from "../common/ItemCommonComp";

const RelatedProducts = ({ itemCategory, itemSubCategory }) => {
  const { products } = useContext(ShopContext);
  const RelatedProduct = products
    .filter(
      (item) =>
        item.category === itemCategory[0] &&
        item.subCategory === itemSubCategory[0]
    )
    .slice(0, 5);

  return (
    <ProductCommonComp text1={"Related"} text2={"Products"}>
      {RelatedProduct.map((item) => (
        <ItemCommonComp key={item._id} item={item} />
      ))}
    </ProductCommonComp>
  );
};

export default RelatedProducts;
