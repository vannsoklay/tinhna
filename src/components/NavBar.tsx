import { Link } from "react-router-dom";
import {
  RiShoppingBasketLine,
  RiHeart3Line,
  RiLock2Line,
} from "react-icons/ri";
import Popup from "./Dialog";
import { useState } from "react";
import LoginForm from "./forms/LoginForm";

export default function NavBar() {
  const auth = false;
  const [hide, setHide] = useState(false);
  return (
    <nav className="flex h-20 justify-between items-center">
      <ul className="w-full">
        <div>
          <input
            type="text"
            className="lg:w-96 sm:w-64 w-58 h-12 outline-none pl-3 border"
            placeholder="Search"
          />
        </div>
      </ul>
      <ul className="flex justify-end space-x-4 items-center">
        <li>
          <div className="h-12 w-12 border cursor-pointer rounded-full relative">
            <label className="flex justify-center items-center h-full">
              <RiHeart3Line className="text-xl text-gray-600" />
            </label>
          </div>
        </li>
        <li>
          <Link to="/checkout">
            <div className="h-12 w-12 cursor-pointer rounded-full border relative">
              <label className="flex justify-center items-center h-full cursor-pointer">
                <RiShoppingBasketLine className="text-xl text-gray-600" />
              </label>
              <span className="absolute -top-1 -right-4 text-sm h-5 w-8 rounded-full bg-red-500 flex justify-center items-center text-white">
                5
              </span>
            </div>
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
      <li className="font-semibold text-md" onClick={() => setHide(true)}>
        <div className="h-12 w-12 border cursor-pointer rounded-full relative">
          <label className="flex justify-center items-center h-full">
            <RiLock2Line className="text-xl text-gray-600" />
          </label>
        </div>
      </li>
    </>
  );
}
