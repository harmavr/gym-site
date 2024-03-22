import { useDispatch, useSelector } from "react-redux";
import CartModal from "./CartModal";
import { closeCart } from "../redux/cart/actions";

export default function Cart({ value }) {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.cart.plan);
  const price = useSelector((state) => state.cart.price);
  const details = useSelector((state) => state.cart.details);

  function handleCloseCart() {
    dispatch(closeCart());
  }

  return (
    <CartModal open={value} onClose={handleCloseCart}>
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {plan ? (
          <div className="cart-details">
            <p className="text-lg font-semibold">Plan: {plan}</p>
            <p className="text-lg font-semibold">Price: {price}</p>
            <p className="text-lg font-semibold">Details: {details}</p>
          </div>
        ) : (
          <div className="my-8 text-lg text-gray-700">Cart is empty</div>
        )}
        <button
          onClick={handleCloseCart}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
        >
          Close
        </button>
      </div>
    </CartModal>
  );
}
