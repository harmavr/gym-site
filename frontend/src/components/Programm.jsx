import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { bookProgramm, closeProgramm } from "../redux/actions";
import { useRouteLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Programm({ value }) {
  const coach = useSelector((state) => state.coach);
  const coachImg = useSelector((state) => state.img);
  const programm = useSelector((state) => state.programm);
  const close = useSelector((state) => state.isModalOpen);
  const book = useSelector((state) => state.membersForToday);
  const token = useRouteLoaderData("root");
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const [teamLength, setTeamLength] = useState(0);

  function handleCloseModal() {
    dispatch(closeProgramm());
  }

  async function handleBook() {
    if (!token) {
      navigateTo("/login");
    } else {
      if (teamLength < 10) {
        const isAlreadyBooked = book.some(
          (member) => member.firstName === firstName
        );
        if (!isAlreadyBooked) {
          console.log(book.firstName);
          alert(`successful book ${firstName}, ${lastName}`);
          const payload = { firstName, lastName };
          dispatch({
            type: "book",
            payload: payload,
          });

          dispatch(closeProgramm());
          setTeamLength((prevTeamLength) => prevTeamLength + 1);
        } else {
          alert("you have already booked!");
        }
      } else {
        alert("max length of team reahed!");
      }
    }
  }

  return (
    <Modal className="programm" open={value}>
      <h2>
        Today's Programm: <span>{programm}</span>
      </h2>
      <h3>{coach}</h3>

      <h3>
        <img style={{ width: "500px" }} src={coachImg} alt="" />
      </h3>
      <button onClick={handleCloseModal}>Close</button>
      <button onClick={handleBook}>Book</button>
      <p>({book.length ? book.length : 0}/10)</p>
    </Modal>
  );
}
