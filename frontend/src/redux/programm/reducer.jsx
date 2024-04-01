import CoachImg from "../../assets/coach.jpg";

const initialProgrammState = {
  coach: "Coach Charis",
  img: CoachImg,
  programm: "Legs",
  isModalOpen: false,
  membersForToday: [],
};

const ProgrammReducer = (state = initialProgrammState, action) => {
  if (action.type === "showProg") {
    return {
      ...state,
      isModalOpen: true,
    };
  }
  if (action.type === "closeProg") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "bookProg") {
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

export default ProgrammReducer;
