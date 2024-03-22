import { useDispatch } from "react-redux";
import CartModal from "./CartModal";
import { closeCart } from "../redux/cart/actions";

export default function Cart({ value }) {
  const dispatch = useDispatch();

  function handleCloseCart() {
    dispatch(closeCart());
  }

  return (
    <CartModal open={value} onClose={handleCloseCart}>
      <div className="max-w-lg mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
      </div>
    </CartModal>
  );
}
