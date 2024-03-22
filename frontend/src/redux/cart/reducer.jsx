const initialCartState = {
  plan: "",
  price: "",
  details: "",
  isModalOpen: false,
};

const CartReducer = (state = initialCartState, action) => {
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
export default CartReducer;
