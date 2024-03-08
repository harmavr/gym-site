import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./Schedule.module.css";
import { useDispatch } from "react-redux";
import { showProgramm } from "../redux/actions";
import Programm from "../components/Programm";

export default function Schedule() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handeDisplayProgramm = () => {
    dispatch(showProgramm());
    setIsModalOpen(true);
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
