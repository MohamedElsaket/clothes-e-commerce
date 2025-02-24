import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { ShopContext } from "../context/ShopContext";
import BlackButton from "../common/BlackButton";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { products, currency, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [size, setSize] = useState("");

  const productItem = products.filter((item) => item._id === productId);
  const itemCategory = productItem.map((item) => item.category);
  const itemSubCategory = productItem.map((item) => item.subCategory);

  return (
    <>
      <div>
        {productItem.map((item) => (
          <div
            key={item._id}
            className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100"
          >
            <div className="flex flex-col gap-12 sm:flex-row">
              <div className="flex flex-1">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-full object-cover h-[90%]"
                />
              </div>
              <div className="flex-1 flex flex-col gap-8">
                <h2 className="text-3xl font-semibold">{item.name}</h2>
                <div className="flex text-yellow-400 text-xl gap-1">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar className="text-yellow-200" />
                </div>
                <h2 className="text-3xl font-semibold">
                  {currency} {item.price}
                </h2>
                <p className="text-gray-500 text-lg leading-6">
                  {item.description}
                </p>
                <p className="text-lg font-medium">Select Size</p>
                <div className="flex gap-5">
                  {item.sizes.map((sizeItem) => (
                    <button
                      onClick={() => setSize(sizeItem)}
                      className={`bg-gray-200 text-xl px-5 py-3 ${
                        sizeItem === size ? "border-orange-400 border" : ""
                      }`}
                      key={sizeItem}
                    >
                      {sizeItem}
                    </button>
                  ))}
                </div>
                <div>
                  <BlackButton onClick={() => addToCart(item._id, size)}>
                    Add To Card
                  </BlackButton>
                </div>
                <hr />
                <p className="text-gray-500 leading-8">
                  100% Original product. <br />
                  Cash on delivery is available on this product. <br />
                  Easy return and exchange policy within 7 days.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border p-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <RelatedProducts
        itemCategory={itemCategory}
        itemSubCategory={itemSubCategory}
      />
    </>
  );
};

export default Product;
