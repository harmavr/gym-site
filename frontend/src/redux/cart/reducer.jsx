const initialCartState = {
  plan: "",
  price: "",
  details: "",
  isModalOpen: false,
};

const CartReducer = (state = initialCartState, action) => {
  if (action.type === "showCart") {
    return {
      ...state,
      isModalOpen: true,
    };
  }
  if (action.type === "closeCart") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "addCart") {
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
