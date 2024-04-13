import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Rootlayout from "./Pages/Rootlayout";
import Home from "./Pages/Home";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Photos from "./Pages/Photos.jsx";
import Contact from "./Pages/Contact.jsx";
import Errorpage from "./Pages/Errorpage.jsx";
// import Toast from "./Pages/Toast.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      errorElement: <Errorpage />,
      children: [
        { path: "", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/projects", element: <Projects /> },
        { path: "/contact", element: <Contact /> },
        { path: "/photos", element: <Photos /> },
        // { path: "/toast", element: <Toast /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
