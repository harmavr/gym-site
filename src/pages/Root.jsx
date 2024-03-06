import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import classes from "./Root.module.css";

export default function Root() {
  return (
    <>
      <Navigation />
      <main className={classes.content}></main>
      <Outlet />
    </>
  );
}
