import { useState } from "react";
import CoachImg from "../assets/coach.jpg";

const initialState = {
  coach: "Coach Charis",
  img: CoachImg,
  programm: "Legs",
  isModalOpen: false,
  membersForToday: [],
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
  }
  if (action.type === "book") {
    const { firstName, lastName } = action.payload;

    const updatedBookings = [
      ...state.membersForToday,
      {
        firstName: firstName,
        lastName: lastName,
      },
    ];
    return {
      ...state,
      isModalOpen: false,
      membersForToday: updatedBookings,
    };
  } else return state;
};

export default reducer;
