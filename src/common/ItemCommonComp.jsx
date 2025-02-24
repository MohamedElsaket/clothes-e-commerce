import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { scrollTop } from "../utils/scrollTop";

const ItemCommonComp = ({ item }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${item._id}`} onClick={scrollTop()}>
      <div className="overflow-hidden">
        <img
          src={item.image[0]}
          alt={item.name}
          className="hover:scale-110 transition ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{item.name}</p>
      <p className="text-sm font-medium">
        {currency}
        {item.price}
      </p>
    </Link>
  );
};

export default ItemCommonComp;
