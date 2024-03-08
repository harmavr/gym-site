import CoachImg from "../assets/coach.jpg";

const initialState = {
  coach: "Coach Charis",
  img: CoachImg,
  programm: "Legs",
};

const reducer = (state = initialState, action) => {
  if (action.type === "prog") {
    return {
      ...state,
    };
  } else return state;
};

export default reducer;
