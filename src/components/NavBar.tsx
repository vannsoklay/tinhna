import { Link } from "react-router-dom";
import { RiShoppingBasketLine, RiMoonLine } from "react-icons/ri";
import Popup from "./Dialog";
import { useState } from "react";
import LoginForm from "./forms/LoginForm";

export default function NavBar() {
  const auth = false;
  const [hide, setHide] = useState(false);
  return (
    <nav className="fixed z-30 flex h-20 w-full bg-gray-50 justify-between items-center bg-white">
      <ul className="w-full flex items-center space-x-4">
        <Link to="/">
          <div className="lg:w-80 w-28 h-20 bg-white flex items-center justify-center border-r border-gray-200">
            <img
              className="h-16 jsutify-center text-center"
              src="https://1000logos.net/wp-content/uploads/2020/06/Lays-Logo.png"
            />
          </div>
        </Link>
        <div>
          <input
            type="text"
            className="lg:w-96 sm:w-64 w-58 h-12 outline-none pl-3 border border-slate-400 focus:outline-none focus:ring-gray-400 focus:border-gray-400"
            placeholder="Search"
          />
        </div>
      </ul>
      <ul className="flex justify-end space-x-2 items-center mr-4">
        <li>
          <button
            id="theme-toggle"
            data-tooltip-target="tooltip-toggle"
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <svg
              id="theme-toggle-dark-icon"
              className="hidden w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <RiMoonLine className="text-2xl text-gray-600" />
          </button>
          <div
            id="tooltip-toggle"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
          >
            Toggle dark mode
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          {/* <div className="h-12 w-12 border cursor-pointer rounded-full relative">
            <label className="flex justify-center items-center h-full">
              <RiHeart3Line className="text-xl text-gray-600" />
            </label>
          </div> */}
        </li>
        <li>
          <Link to="/checkout">
            <button
              type="button"
              // data-dropdown-toggle="notification-dropdown"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              <RiShoppingBasketLine className="text-2xl text-gray-600" />
            </button>
            {/* <div className="h-12 w-12 cursor-pointer rounded-full border relative">
              <label className="flex justify-center items-center h-full cursor-pointer">
                <RiShoppingBasketLine className="text-xl text-gray-600" />
              </label>
              <span className="absolute -top-1 -right-4 text-sm h-5 w-8 rounded-full bg-red-500 flex justify-center items-center text-white">
                5
              </span>
            </div> */}
          </Link>
        </li>
        {auth ? <NavbarPrivate /> : <NavbarPublic setHide={setHide} />}
      </ul>
      <Popup
        title="Sigin In"
        hide={hide}
        size="md"
        onCancel={() => {
          setHide(false);
        }}
      >
        <LoginForm setHide={setHide} />
      </Popup>
    </nav>
  );
}

function NavbarPrivate() {
  return (
    <li>
      <Link to="/about-me">
        <div className="h-12 w-12 cursor-pointer border border-green-800 rounded-full bg-coffee-2 relative">
          <label className="flex justify-center items-center h-full">
            <img
              src="https://www.tocanvas.net/wp-content/uploads/2022/06/gojo-jjk.jpg"
              alt="soklay.png"
              className="h-full w-full object-cover rounded-full cursor-pointer"
            />
          </label>
        </div>
      </Link>
    </li>
  );
}

function NavbarPublic({ setHide }: any) {
  return (
    <>
      <li onClick={() => setHide(true)}>
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 focus:outline-none rounded-lg text-sm p-2.5"
        >
          <span className="text-md font-bold text-gray-600">Login</span>
        </button>
      </li>
    </>
  );
}
