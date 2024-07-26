import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Rootlayout from "./Pages/Rootlayout";
import Home from "./Pages/Home";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Contact from "./Pages/Contact.jsx";
import Page from "./Pages/Page.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      errorElement: <Home />,
      children: [
        { path: "", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/projects", element: <Projects /> },
        { path: "/contact", element: <Contact /> },
        { path: "/projects/:ID", element: <Page /> },
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
