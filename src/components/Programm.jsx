import { useSelector } from "react-redux";
import Modal from "./Modal";

export default function Programm({ value }) {
  const coach = useSelector((state) => state.coach);
  const coachImg = useSelector((state) => state.img);
  const programm = useSelector((state) => state.programm);

  return (
    <Modal className="programm" open={value}>
      <h2>Today's Programm</h2>
      <h3>{coach}</h3>
      <h3>{programm}</h3>
      <h3>
        <img style={{ width: "500px" }} src={coachImg} alt="" />
      </h3>
    </Modal>
  );
}
