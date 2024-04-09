import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="dark">
      <div id="mainbody" className="dark:bg-zinc-900 dark:text-white">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
