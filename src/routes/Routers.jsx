import { createBrowserRouter } from "react-router-dom";
import Skill from "../components/Skill";
import Works from "../components/Works";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import About from "./../components/About";
import Contact from "./../components/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/about", element: <About /> },
      { path: "/skills", element: <Skill /> },
      { path: "/works", element: <Works /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
