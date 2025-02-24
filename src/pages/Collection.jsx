import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import LeftSideCollection from "../components/collections/LeftSideCollection";
import RightSideCollection from "../components/collections/RightSideCollection";
import SearchBar from "../components/SearchBar";

const Collection = () => {
  const { products, search, setSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedValue, setSortedValue] = useState("");

  const filteredItems = products.filter(
    (item) => item.category === filteredProducts
  );

  let finalProducts = isFilter ? filteredItems : products;

  if (sortedValue === "low-high")
    finalProducts.sort((a, b) => a.price - b.price);

  if (sortedValue === "high-low")
    finalProducts.sort((a, b) => b.price - a.price);

  if (search)
    finalProducts = finalProducts.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  function handleFilter(e) {
    setFilteredProducts(e.target.value);
    setIsFilter(true);
    if (e.target.value === "all") setIsFilter(false);
  }

  function handleSort(e) {
    setSortedValue(e.target.value);
  }

  return (
    <>
      <SearchBar />
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        <LeftSideCollection
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          onFilter={handleFilter}
        />
        <RightSideCollection
          products={finalProducts}
          sortedValue={sortedValue}
          onSort={handleSort}
        />
      </div>
    </>
  );
};

export default Collection;
