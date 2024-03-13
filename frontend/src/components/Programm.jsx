import { useSelector } from "react-redux";
import Modal from "./Modal";
import { closeProgramm } from "../redux/actions";
import { useRouteLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Programm({ value }) {
  const coach = useSelector((state) => state.coach);
  const coachImg = useSelector((state) => state.img);
  const programm = useSelector((state) => state.programm);
  const close = useSelector((state) => state.isModalOpen);
  const token = useRouteLoaderData("root");
  const navigateTo = useNavigate();

  function handleCloseModal() {
    dispatch(closeProgramm());
  }

  async function handleBook() {
    if (!token) {
      navigateTo("/login");
    }
  }

  return (
    <Modal className="programm" open={value}>
      <h2>
        Today's Programm: <span>{programm}</span>
      </h2>
      <h3>{coach}</h3>

      <h3>
        <img style={{ width: "500px" }} src={coachImg} alt="" />
      </h3>
      <button onClick={handleCloseModal}>Close</button>
      <button onClick={handleBook}>Book</button>
    </Modal>
  );
}
