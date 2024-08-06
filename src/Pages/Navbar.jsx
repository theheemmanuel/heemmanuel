import { useState, useLayoutEffect } from "react";
import {
  CgDarkMode,
  MdOutlineLightMode,
  MdCancel,
  BiMenuAltRight,
} from "../Pages/Icons";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("mode");
    if (savedTheme === "dark") {
      setdark(true);
      document.documentElement.classList.add("dark");
    } else {
      setdark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const [darker, setdark] = useState();
  const [showmenu, setshowmenu] = useState(false);
  const toggleDarkMode = () => {
    if (!darker) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }

    setdark(!darker);
  };
  const menubar = () => {
    setshowmenu(!showmenu);
  };
  return (
    <>
      <div className="relative font-viga flex items-center justify-between max-wid py-6">
        <NavLink to="/">
          <div className="font-bold rounded-lg text-xl dark:bg-white bg-gray-600 dark:text-gray-600 text-white px-[6px]">
            EO
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
          </ul>
        </div>
        <div className="flex gap-6 items-center">
          <button
            className="border-2 p-1 rounded-full"
            onClick={toggleDarkMode}
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
                ? "md:hidden font-bold absolute top-0 right-0 rounded-xl w-[40%] mt-[80px] bg-white dark:bg-black flex flex-col gap-6 p-6 z-10"
                : "right-[-1000px] fixed"
            }
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-zinc-500" : ""
              }
              onClick={() => setshowmenu(!showmenu)}
              to="about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-zinc-500" : ""
              }
              onClick={() => setshowmenu(!showmenu)}
              to="projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-zinc-500" : ""
              }
              onClick={() => setshowmenu(!showmenu)}
              to="contact"
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
      <p className="bg-zinc-600 dark:bg-zinc-400 w-[100%] h-[0.5px]"></p>
    </>
  );
};

export default Navbar;
