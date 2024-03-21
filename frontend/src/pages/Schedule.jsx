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
    <div class="flex flex-col items-center justify-center relative h-full">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Schedule</h1>
      <Calendar
        className="absolute top-full bg-white border border-gray-300 shadow-md"
        onChange={onChange}
        onClickDay={handeDisplayProgramm}
        value={value}
        tileClassName={({ date, view }) =>
          view === "month" &&
          date.getDate() === new Date().getDate() &&
          date.getMonth() === new Date().getMonth()
            ? "bg-gray-600"
            : ""
        }
      />
      <Programm value={isModalOpen} />
    </div>
  );
}
