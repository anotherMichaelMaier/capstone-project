import styled from "styled-components";
import Modal from "./Modal";

export default function ModalEditCard({
  name,
  note,
  time,
  id,
  tasks,
  setTasks,
  updateTask,
  showModalEdit,
  handleClose,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setTasks = tasks.map((task) => {
      if (task.id === id)
        updateTask(id, {
          ...task,
          name: data.name,
          note: data.note,
          time: data.time,
        });
      return task;
    });
    handleClose();
  }
  return (
    <Modal showModal={showModalEdit}>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">new To-Do:</label>
        <input
          id="name"
          name="name"
          type="text"
          maxLength="70"
          pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖ.]{1,70}"
          defaultValue={name}
          required
        />
        <label htmlFor="note">notes:</label>
        <textarea
          id="note"
          name="note"
          type="text"
          maxLength="500"
          pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖ.]{1,1000}"
          defaultValue={note}
        />
        <label htmlFor="time">estimated time:</label>
        <input
          id="time"
          name="time"
          type="number"
          min={1}
          max={999}
          placeholder="time in minutes"
          defaultValue={time}
          required
        />
        <button type="button" onClick={handleClose}>
          Cancel
        </button>
        <button type="submit">Save changes</button>
      </StyledForm>
    </Modal>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
