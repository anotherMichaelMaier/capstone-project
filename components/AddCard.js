import styled from "styled-components";
import { useState } from "react";
import CharacterCounter from "./CharacterCounter";
import IconAdd from "@/public/add_circle_empty.svg";

export default function AddCard({ createTask }) {
  const [toggleAddButton, setToggleAddButton] = useState(false);
  const [countName, setCountName] = useState(0);
  const [countNote, setCountNote] = useState(0);
  function handleClick() {
    setToggleAddButton(!toggleAddButton);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    createTask(data);
    setCountName(0);
    setCountNote(0);
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
            maxLength="40"
            pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖ.]{1,70}"
            onChange={(event) => setCountName(event.target.value.length)}
            required
          />
          <CharacterCounter maxLength={40} counter={countName} />
          <label htmlFor="note">notes:</label>
          <textarea
            id="note"
            name="note"
            type="text"
            maxLength="200"
            pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖ.]{1,1000}"
            onChange={(event) => setCountNote(event.target.value.length)}
          />
          <CharacterCounter maxLength={200} counter={countNote} />
          <label htmlFor="time">estimated time:</label>
          <input
            id="time"
            name="time"
            type="number"
            min={1}
            max={999}
            placeholder="time in minutes"
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
