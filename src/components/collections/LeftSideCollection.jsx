import { assets } from "../../assets/frontend_assets/assets";

const LeftSideCollection = ({ showFilter, setShowFilter, onFilter }) => {
  return (
    <div className="min-w-60">
      <p
        onClick={() => setShowFilter((show) => !show)}
        className="my-2 text-xl flex items-center cursor-pointer gap-2 uppercase"
      >
        filters
        <img
          className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          src={assets.dropdown_icon}
          alt="dropdown_icon"
        />
      </p>
      <div
        className={`border border-gray-300 pl-5 py-3 my-5 ${
          showFilter ? "" : "hidden"
        } sm:block`}
      >
        <p className="uppercase mb-3 text-sm sm:text-lg font-medium">
          categories
        </p>
        <div className="flex flex-col gap-2 text-sm sm:text-lg font-light text-gray-700">
          <p className="flex gap-2">
            <input
              id="1"
              type="radio"
              name="option"
              className="w-3"
              value={"all"}
              onClick={onFilter}
            />
            <label className="cursor-pointer" htmlFor="1">
              All
            </label>
          </p>
          <p className="flex gap-2">
            <input
              id="2"
              type="radio"
              name="option"
              className="w-3"
              value={"Men"}
              onClick={onFilter}
            />
            <label className="cursor-pointer" htmlFor="2">
              Men
            </label>
          </p>
          <p className="flex gap-2">
            <input
              id="3"
              type="radio"
              name="option"
              className="w-3"
              value={"Women"}
              onClick={onFilter}
            />
            <label className="cursor-pointer" htmlFor="3">
              Women
            </label>
          </p>
          <p className="flex gap-2">
            <input
              id="4"
              type="radio"
              name="option"
              className="w-3"
              value={"Kids"}
              onClick={onFilter}
            />
            <label className="cursor-pointer" htmlFor="4">
              Kids
            </label>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideCollection;
