import classes from "./Home.module.css";
export default function Home() {
  return (
    <div className="home">
      <div className={classes.add}>
        <span>Awsome fitness club</span>
      </div>
      <div className={classes.text}>
        <span>
          Make the <span>PERFECT </span>body
        </span>
      </div>
    </div>
  );
}
