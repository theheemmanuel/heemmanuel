import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import { CgDarkMode } from "react-icons/cg";
import { MdOutlineLightMode } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { MdCancel } from "react-icons/md";

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
    <div className={darker ? "" : "dark"}>
      <div id="mainbody" className="dark:bg-zinc-700 dark:text-white">
        <div>
          <div className="reddit flex items-center justify-between max-wid p-6">
            <div className="font-bold rounded-lg text-xl dark:bg-white bg-black dark:text-black text-white px-[6px]">
              Ty0
            </div>
            <div>
              <ul className="md:flex gap-4 font-bold hidden">
                <li role="button">About</li>
                <li role="button">Projects</li>
                <li role="button">Contact</li>
                <li role="button">Photos</li>
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
                  <MdCancel size={30} />
                ) : (
                  <BiMenuAltRight size={30} />
                )}
              </div>
              <ul
                className={
                  showmenu
                    ? "transition-all ease-in duration-400 md:hidden font-bold fixed top-0 right-0 h-[100vh] w-[100%] mt-[100px] bg-white dark:bg-black flex flex-col gap-6 p-6"
                    : "right-[-100px] fixed transition-all ease-in duration-100"
                }
              >
                <li role="button">About</li>
                <li role="button">Projects</li>
                <li role="button">Contact</li>
                <li role="button">Photos</li>
              </ul>
            </div>
          </div>
          <p className="bg-white w-[100%] h-[0.5px]"></p>
        </div>
        <Hero />
      </div>
    </div>
  );
}

export default App;
