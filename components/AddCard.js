import styled from "styled-components";
import { useState } from "react";
import IconAdd from "@/public/add_circle_empty.svg";

export default function AddCard({ createTask }) {
  const [toggleAddButton, setToggleAddButton] = useState(false);
  function handleClick() {
    setToggleAddButton(!toggleAddButton);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    createTask(data);

    event.target.reset();
    setToggleAddButton(!toggleAddButton);
  }

  return (
    <StyledDiv>
      <button onClick={handleClick}>
        <IconAdd />
      </button>
      {toggleAddButton ? (
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="name">new To-Do:</label>
          <input
            id="name"
            name="name"
            type="text"
            pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖ.]{1,70}"
            required
          />
          <label htmlFor="note">notes:</label>
          <textarea
            id="note"
            name="note"
            type="text"
            pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖ.]{1,1000}"
          />
          <label htmlFor="time">estimated time:</label>
          <input
            id="time"
            name="time"
            type="number"
            min={1}
            max={999}
            required
          />
          <button type="submit">Add task to list</button>
        </StyledForm>
      ) : (
        ""
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  border: solid blue;
  margin: 90px 20px 20px 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
