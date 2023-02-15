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
      <ModalWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInputDiv>
            <label htmlFor="name">new to-do:</label>
            <StyledInput
              id="name"
              name="name"
              type="text"
              maxLength="70"
              pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖ.]{1,70}"
              defaultValue={name}
              required
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <label htmlFor="note">notes:</label>
            <StyledTextArea
              id="note"
              name="note"
              type="text"
              maxLength="500"
              rows="5"
              pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖ.]{1,1000}"
              defaultValue={note}
            />
          </StyledInputDiv>
          <StyledInputDiv>
            <label htmlFor="time">estimated time effort:</label>
            <StyledInput
              id="time"
              name="time"
              type="number"
              min={1}
              max={999}
              placeholder="time in minutes"
              defaultValue={time}
              required
            />
          </StyledInputDiv>
          <StyledDiv>
            <StyledButton type="button" onClick={handleClose}>
              cancel
            </StyledButton>
            <StyledButton type="submit">save</StyledButton>
          </StyledDiv>
        </StyledForm>
      </ModalWrapper>
    </Modal>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
`;

const ModalWrapper = styled.div`
  background-color: var(--color-royalblue);
  max-width: 95vw;
  min-height: 30vh;
  border-radius: 15px;
  padding: 10px;
  display: grid;
  align-items: flex-start;
  justify-items: center;
  border: solid black;
`;

const StyledButton = styled.button`
  background-color: white;
  white-space: nowrap;
  border: #737373 1px solid;
  border-left: none;
  border-radius: 5px;
  height: 25px;
  width: 60px;
  color: var(--color-royalblue);
  text-align: center;
  box-shadow: 0 0.3em 0.5em 0 rgb(0, 0, 0, 0.3);
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
`;

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-creamwhite);
  padding: 10px;
  font-size: medium;
  gap: 5px;
  border-radius: 8px;
  border: solid black;
`;

const StyledTextArea = styled.textarea`
  border: solid black;
  outline-color: var(--color-lightblue);
  resize: none;
`;

const StyledInput = styled.input`
  border: solid black;
  :focus {
    outline-color: var(--color-lightblue);
  }
`;
