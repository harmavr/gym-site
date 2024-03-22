import { Form, Link, useRouteLoaderData } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";
import cartImg from "../assets/cart.jpg";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, showCart } from "../redux/cart/actions";

export default function Navigation() {
  const token = useRouteLoaderData("root");

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  const isModalOpen = useSelector((state) => state.cart.isModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    setFirstName(storedFirstName);
    setLastName(storedLastName);
  }, []);

  function handleShowCart() {
    dispatch(showCart());
  }

  return (
    <div className="index-page">
      <header className="bg-gray-800 py-4">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/home">
              <img src={logo} alt="" className="h-10" />
            </Link>
            <ul className="flex space-x-4 ml-4">
              <li>
                <Link to="/home" className="text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-white hover:text-gray-300">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white hover:text-gray-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-3">
            {token ? (
              <>
                {firstName && lastName && (
                  <p className="text-white mr-4">{`${firstName} ${lastName}`}</p>
                )}
                <div className="cart ">
                  <button onClick={handleShowCart}>
                    <img src={cartImg} alt="" className="h-10" />
                  </button>
                  {<Cart value={isModalOpen} />}
                </div>
                <Form action="/logout" method="post">
                  <button className="text-white hover:text-gray-300">
                    Logout
                  </button>
                </Form>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white hover:text-gray-300 mr-4"
                >
                  Login
                </Link>
                <Link to="/register" className="text-white hover:text-gray-300">
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
