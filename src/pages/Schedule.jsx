import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./Schedule.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showProgramm } from "../redux/actions";
import Programm from "../components/Programm";

export default function Schedule() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalOpen);

  const handeDisplayProgramm = () => {
    dispatch(showProgramm());
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
      <Programm value={isModalOpen} />
    </div>
  );
}
