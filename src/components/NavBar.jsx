import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Search } from "./";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <header className="min-w-[1000px] w-full fixed z-40">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px] m-2"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">United Kingdom</div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
          <Link to={"/login"}>
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div></Link>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      {/* Nav menu*/}
      <ul
        className={
          nav
            ? "fixed top-24  left-0 w-[365px] v-screen h-[82vh] bg-slate-200 z-10 duration-500"
            : "fixed top-0 left-[-100%] w-[365px] h-[82vh] v-screen bg-slate-200 z-10 duration-500"
        }
      >
        <div className="w-full text-3xl font-bold h-24 text-center  bg-amazonclone-light_blue  text-white ">
          <Link to="login">
            <h1>Hello, sign in</h1>
          </Link>
        </div>

        <Link to="/">
          <li
            className="py-6   text-lg p-4   text-gray-600 hover:text-amazonclone
                    cursor-pointer  transition-colors duration-300 "
          >
            Home
          </li>
        </Link>
        <Link to="/">
          <li
            className="py-6 text-lg p-4   text-gray-600 hover:text-amazonclone
                    cursor-pointer transition-colors duration-300"
          >
            About
          </li>
        </Link>

        <Link to="/contact">
          <li
            className="py-6 text-lg p-4 border-b border-gray-600 lex text-gray-600 hover:text-amazonclone
                    cursor-pointer transition-colors duration-300"
          >
            {" "}
            Contact
          </li>
        </Link>
        <Link to="/">
          <li
            className="py-6   text-lg p-4   text-gray-600 hover:text-amazonclone
                    cursor-pointer  transition-colors duration-300 "
          >
            Home
          </li>
        </Link>
        <Link to="/">
          <li
            className="py-6 text-lg p-4   text-gray-600 hover:text-amazonclone
                    cursor-pointer transition-colors duration-300"
          >
            About
          </li>
        </Link>

        <Link to="/contact">
          <li
            className="py-6 text-lg p-4 border-b border-gray-600 lex text-gray-600 hover:text-amazonclone
                    cursor-pointer transition-colors duration-300"
          >
            {" "}
            Contact
          </li>
        </Link>
        <Link to="/">
          <li
            className="py-6   text-lg p-4   text-gray-600 hover:text-amazonclone
                    cursor-pointer  transition-colors duration-300 "
          >
            Home
          </li>
        </Link>
        <Link to="/">
          <li
            className="py-6 text-lg p-4   text-gray-600 hover:text-amazonclone
                    cursor-pointer transition-colors duration-300"
          >
            About
          </li>
        </Link>

        <Link to="/contact">
          <li
            className="py-6 text-lg p-4 border-b border-gray-600 lex text-gray-600 hover:text-amazonclone
                    cursor-pointer transition-colors duration-300"
          >
            {" "}
            Contact
          </li>
        </Link>
      </ul>

      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div className="h-2 -mt-3 -mr-4" onClick={handleClick}>
          <Hamburger size={15} />
        </div>

        <Link to={"/view"}>
          <div>Today's Deals</div>
        </Link>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default NavBar;
