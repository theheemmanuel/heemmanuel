import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Navbar from "./Navbar";

function Rootlayout() {
  return (
    <div className="">
      <div
        id="mainbody"
        className="dark:bg-zinc-900 dark:text-white text-zinc-700"
      >
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Rootlayout;
