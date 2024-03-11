import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Schedule from "./pages/Schedule";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/schedule", element: <Schedule /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login />, action: loginAction },
      { path: "/register", element: <Register />, action: registerAction },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
