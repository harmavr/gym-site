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
  }
  if (action.type === "close") {
    return {
      ...state,
      isModalOpen: false,
    };
  } else return state;
};

export default reducer;
