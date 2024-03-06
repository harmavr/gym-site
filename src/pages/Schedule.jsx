import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./Schedule.module.css";

export default function Schedule() {
  const handeDisplayProgramm = () => {
    console.log("asdasd");
  };

  const [value, onChange] = useState(new Date());
  return (
    <div className={classes.schedule}>
      <h1>Schedule</h1>
      <Calendar
        className={classes.myReactCalendar}
        onChange={onChange}
        onClickDay={handeDisplayProgramm}
        value={value}
      />
    </div>
  );
}
