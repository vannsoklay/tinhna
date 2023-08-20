import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Notify } from "./Notify";

export default function Container() {
  return (
    <Fragment>
      <Notify />
      <div className="bg-gray-50 h-screen dark:bg-gray-900">
        <NavBar />
        <div className="flex pt-20 bg-gray-50 dark:bg-gray-900">
          <SideBar />
          <div className="relative w-full h-full lg:ml-80 ml-20 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            <Outlet />
          </div>
        </div>
        <div className="absolute bg-gray-400 h-14 w-14 rounded-full bottom-0 right-0 m-4">
          <img
            className="rounded-full"
            src="https://play-lh.googleusercontent.com/64pIxivSTmdI8ngZc8sQESkXKCgqS2bQTGG_29dx052T0Re3csxpKUP0_gMgOErOmUg"
          />
        </div>
      </div>
    </Fragment>
  );
}
