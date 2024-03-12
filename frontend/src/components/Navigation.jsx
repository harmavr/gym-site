import { Form, Link, useRouteLoaderData } from "react-router-dom";
import classes from "./Navigation.module.css";
import logo from "../assets/logo.jpg";

export default function Navigation() {
  const token = useRouteLoaderData("root");
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
          </ul>
        </nav>
      </header>
    </div>
  );
}
