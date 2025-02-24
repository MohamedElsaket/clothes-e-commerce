import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useContext, useState } from "react";
import { scrollTop } from "../utils/scrollTop";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  const collectionPathname = "/collection";

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-36" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        {pathname === collectionPathname ? (
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-5 cursor-pointer"
            onClick={() => setShowSearch((show) => !show)}
          />
        ) : null}

        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="Profile"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Log out</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="Cart" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setShowMenu((show) => !show)}
        />
      </div>

      {/* Side bar MENU for Small Screen */}
      <div
        className={`absolute right-0 bottom-0 overflow-hidden bg-white transition-all h-screen ${
          showMenu ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setShowMenu((show) => !show)}
            className="flex items-center gap-2 p-5 cursor-pointer ml-auto"
          >
            <p>Back</p>
            <img src={assets.dropdown_icon} alt="back" className="h-4" />
          </div>
          <NavLink
            to="/"
            onClick={() => {
              setShowMenu((show) => !show);
              scrollTop();
            }}
            className="py-5 pl-6 border uppercase hover:bg-black hover:text-gray-100"
          >
            home
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => {
              setShowMenu((show) => !show);
              scrollTop();
            }}
            className="py-5 pl-6 border uppercase hover:bg-black hover:text-gray-100"
          >
            collection
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => {
              setShowMenu((show) => !show);
              scrollTop();
            }}
            className="py-5 pl-6 border uppercase hover:bg-black hover:text-gray-100"
          >
            about
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => {
              setShowMenu((show) => !show);
              scrollTop();
            }}
            className="py-5 pl-6 border uppercase hover:bg-black hover:text-gray-100"
          >
            contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
