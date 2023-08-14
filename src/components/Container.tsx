import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Notify } from "./Notify";

export default function Container() {
  return (
    <Fragment>
      <Notify />
      <div className="w-full flex">
        <div className="h-screen w-2/12 bg-slate-200">
          <SideBar />
        </div>
        <div className="w-full max-auto container xl:px-8 px-4">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}
