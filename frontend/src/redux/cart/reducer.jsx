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
  }
  if (action.type === "add") {
    const { plan, price, details } = action.payload;

    return {
      ...state,
      isModalOpen: false,
      plan: plan,
      price: price,
      details: details,
    };
  } else return state;
};
export default CartReducer;
