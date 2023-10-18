import { Link } from "react-router-dom";
import Popup from "./Dialog";
import { useState } from "react";
import LoginForm from "./forms/LoginForm";
import { AddToCart } from "./Cart";
import { useShop } from "../contexts/useShop";

export default function NavBar() {
  const { carts } = useShop();
  const auth = false;
  const [hide, setHide] = useState(false);
  return (
    <nav className="fixed z-30 flex h-20 w-full bg-gray-50 justify-between items-center">
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
      <ul className="flex justify-end space-x-4 items-center mr-4">
        <li>
          <button
            type="button"
            data-dropdown-toggle="notification-dropdown"
            className="p-2 relative inline-flex items-centter text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <span className="sr-only">Add Cart</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {carts.length}
            </div>
          </button>
          <div
            className="z-20 z-50 hidden max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700"
            id="notification-dropdown"
          >
            <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              Products
            </div>
            <AddToCart />
            <Link
              to="/checkout"
              className="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
            >
              <div className="inline-flex items-center ">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                View all
              </div>
            </Link>
          </div>
        </li>
        <li>
          <button
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <svg
              className="hidden w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
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
          className="bg-blue-800 px-8 text-md font-bold text-white dark:text-gray-400 focus:outline-none rounded-lg text-sm py-2.5"
        >
          Login
        </button>
      </li>
    </>
  );
}
