import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function CartModal({ children, open, onClose }) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("cart-modal")
  );
}
