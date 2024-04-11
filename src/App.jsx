import { useState } from "react";
import "./App.css";
import { CgDarkMode } from "react-icons/cg";
import { MdOutlineLightMode } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import Footer from "./Pages/Footer";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  const [darker, setdark] = useState(true);
  const [showmenu, setshowmenu] = useState(false);
  const changtheme = () => {
    setdark(!darker);
  };
  const menubar = () => {
    setshowmenu(!showmenu);
  };
  return (
    <div className={darker ? "light" : "dark"}>
      <div
        id="mainbody"
        className="dark:bg-zinc-800 dark:text-white text-zinc-700"
      >
        <div>
          <div className="font-mono flex items-center justify-between max-wid lg:px-24 p-6">
            <NavLink to="/">
              <div className="font-bold rounded-lg text-xl dark:bg-white bg-black dark:text-black text-white px-[6px]">
                &y0
              </div>
            </NavLink>
            <div>
              <ul className="md:flex gap-4 font-bold hidden">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-zinc-500" : ""
                  }
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-zinc-500" : ""
                  }
                  to="/projects"
                >
                  Projects
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-zinc-500" : ""
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-zinc-500" : ""
                  }
                  to="/photos"
                >
                  Photos
                </NavLink>
              </ul>
            </div>
            <div className="flex gap-6 items-center">
              <button
                className="border-2 p-1 rounded-full"
                onClick={changtheme}
              >
                {darker ? (
                  <CgDarkMode size={30} />
                ) : (
                  <MdOutlineLightMode size={30} />
                )}
              </button>{" "}
              <div onClick={menubar} className="border-2 md:hidden block">
                {showmenu ? (
                  <MdCancel size={30} color="" />
                ) : (
                  <BiMenuAltRight size={30} />
                )}
              </div>
              <ul
                className={
                  showmenu
                    ? "transition-all ease-in duration-400 md:hidden font-bold fixed top-0 right-0 h-[100vh] w-[100%] mt-[80px] bg-white dark:bg-black flex flex-col gap-6 p-6 z-10"
                    : "right-[-100%] fixed transition-all ease-in duration-100"
                }
              >
                <NavLink onClick={() => setshowmenu(!showmenu)} to="about">
                  About
                </NavLink>
                <NavLink onClick={() => setshowmenu(!showmenu)} to="projects">
                  Projects
                </NavLink>
                <NavLink onClick={() => setshowmenu(!showmenu)} to="contact">
                  Contact
                </NavLink>
                <NavLink onClick={() => setshowmenu(!showmenu)} to="photos">
                  Photos
                </NavLink>
              </ul>
            </div>
          </div>
          <p className="bg-zinc-600 dark:bg-zinc-400 w-[100%] h-[0.5px]"></p>
        </div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
