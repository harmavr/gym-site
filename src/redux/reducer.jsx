import { useState } from "react";
import CoachImg from "../assets/coach.jpg";

const initialState = {
  coach: "Coach Charis",
  img: CoachImg,
  programm: "Legs",
  isModalOpen: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "show") {
    return {
      ...state,
      isModalOpen: true,
    };
  } else return state;
};

export default reducer;
