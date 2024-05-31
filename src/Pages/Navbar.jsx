import { useState, useEffect } from "react";
import {
  CgDarkMode,
  MdOutlineLightMode,
  MdCancel,
  BiMenuAltRight,
} from "../Pages/Icons";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  useEffect(() => {
    // Check localStorage for the theme preference on component mount
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme);
    if (savedTheme === "dark") {
      setdark(true);
      document.documentElement.classList.add("dark");
    } else {
      setdark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const [darker, setdark] = useState(false);
  const [showmenu, setshowmenu] = useState(false);
  // const changtheme = () => {
  //   document.documentElement.classList.toggle("dark");
  //   setdark(!darker);
  // };
  const toggleDarkMode = () => {
    if (!darker) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
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
          <div className="font-bold rounded-lg text-xl dark:bg-white bg-black dark:text-black text-white px-[6px]">
            Emm
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
            <NavLink onClick={() => setshowmenu(!showmenu)} to="about">
              About
            </NavLink>
            <NavLink onClick={() => setshowmenu(!showmenu)} to="projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setshowmenu(!showmenu)} to="contact">
              Contact
            </NavLink>
            {/* <NavLink onClick={() => setshowmenu(!showmenu)} to="photos">
              Photos
            </NavLink>  */}
          </ul>
        </div>
      </div>
      <p className="bg-zinc-600 dark:bg-zinc-400 w-[100%] h-[0.5px]"></p>
    </>
  );
};

export default Navbar;
