import styled from "styled-components";
import Modal from "./Modal";

export default function ModalDelete({
  handleClose,
  handleDelete,
  showModalDelete,
}) {
  return (
    <Modal showModal={showModalDelete}>
      <h2>Are you sure you are done with the task?</h2>
      <div>
        <button onClick={handleClose}>No</button>
        <button onClick={handleDelete}>Yes</button>
      </div>
    </Modal>
  );
}
