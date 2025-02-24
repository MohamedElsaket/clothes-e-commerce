import { useContext } from "react";
import Title from "../../common/Title";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import { scrollTop } from "../../utils/scrollTop";

const RightSideCollection = ({ products, sortedValue, onSort }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className="flex-1 overflow-scroll max-h-screen">
      <div className="flex justify-between text-base sm:text-2xl mb-4">
        <Title text1={"All"} text2={"collections"} />

        {/* Sorting */}
        <select
          className="border-2 border-gray-300 text-sm px-2"
          value={sortedValue}
          onChange={onSort}
        >
          <option value="">-- Select Sorting --</option>
          <option value="low-high">Sort By: Low To Hight</option>
          <option value="high-low">Sort By: Hight To Low</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {products.map((item) => (
          <Link
            to={`/product/${item._id}`}
            onClick={scrollTop}
            key={item._id}
            className="flex flex-col gap-2"
          >
            <div className="overflow-hidden">
              <img
                src={item.image[0]}
                className="hover:scale-110 transition-all"
              />
            </div>
            <div className="text-sm">
              <p className="text-gray-500 pb-1">{item.name}</p>
              <p>
                {currency}
                {item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RightSideCollection;
