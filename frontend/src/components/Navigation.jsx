import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import logo from "../assets/logo.jpg";

export default function Navigation() {
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
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
