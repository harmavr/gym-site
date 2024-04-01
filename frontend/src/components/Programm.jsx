import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgramModal from "./ProgramModal";
import { closeProgramm } from "../redux/programm/actions";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { useState } from "react";

export default function Programm({ value }) {
  const coach = useSelector((state) => state.program.coach);
  const coachImg = useSelector((state) => state.program.img);
  const programm = useSelector((state) => state.program.programm);
  const book = useSelector((state) => state.program.membersForToday);
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
            type: "bookProg",
            payload: payload,
          });

          dispatch(closeProgramm());
          setTeamLength((prevTeamLength) => prevTeamLength + 1);
        } else {
          alert("you have already booked!");
        }
      } else {
        alert("max length of team reached!");
      }
    }
  }

  return (
    <ProgramModal className="programm" open={value} onClose={handleCloseModal}>
      <div className="max-w-lg mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">
          Today's Programm: <span className="font-normal">{programm}</span>
        </h2>
        <h3 className="text-xl font-semibold mb-4">{coach}</h3>

        <div className="mb-4">
          <img className="w-full" src={coachImg} alt="" />
        </div>
        <button
          onClick={handleCloseModal}
          className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
        >
          Close
        </button>
        <button
          onClick={handleBook}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Book
        </button>
        <p className="mt-2 text-gray-600">{book.length ? book.length : 0}/10</p>
      </div>
    </ProgramModal>
  );
}
