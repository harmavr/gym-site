import { Form, Link, useRouteLoaderData } from "react-router-dom";
import classes from "./Navigation.module.css";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";

export default function Navigation() {
  const token = useRouteLoaderData("root");

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    setFirstName(storedFirstName);
    setLastName(storedLastName);
  }, []);

  return (
    <div className="index-page">
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <Link to="/home">
                <img src={logo} alt="" className={classes.logo} />
              </Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {!token && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
            {token && (
              <li>
                <Form action="/logout" method="post">
                  <button>Logout</button>
                </Form>
              </li>
            )}
            {firstName && lastName && <p>{`${firstName} ${lastName}`}</p>}
          </ul>
        </nav>
      </header>
    </div>
  );
}
