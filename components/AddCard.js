import styled from "styled-components";
import { useState } from "react";
import CharacterCounter from "./CharacterCounter";
import AddTask from "@/public/icons/addTask.svg";

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
    <StyledFormCard>
      <StyledAddButton onClick={handleClick}>
        <AddTask />
      </StyledAddButton>
      {toggleAddButton && (
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput>
            <label htmlFor="name">task:</label>
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
          </StyledInput>
          <StyledInput>
            <label htmlFor="note">notes:</label>
            <textarea
              id="note"
              name="note"
              type="text"
              rows="5"
              maxLength="200"
              pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖ.]{1,1000}"
              onChange={(event) => setCountNote(event.target.value.length)}
            />
            <CharacterCounter maxLength={200} counter={countNote} />
          </StyledInput>
          <StyledInput>
            <label htmlFor="time">estimated time effort:</label>
            <input
              id="time"
              name="time"
              type="number"
              min={1}
              max={999}
              placeholder="time in minutes"
              required
            />
          </StyledInput>
          <StyledSubmitButton type="submit">Submit task</StyledSubmitButton>
        </StyledForm>
      )}
    </StyledFormCard>
  );
}

// const StyledDiv = styled.div`
//   border: solid var(--color-royalblue);
//   text-align: center;
//   list-style: none;
//   overflow-wrap: break-word;
//   width: 90%;
// `;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  color: var(--color-creamwhite);
`;

const StyledFormCard = styled.div`
  text-align: center;
  border: solid black;
  background-color: var(--color-royalblue);
  border-radius: 15px;
  box-shadow: 5px 5px 15px 0.5px grey;
  padding: 0 15px;
  margin: 20px 15px 0 15px;
`;

const StyledAddButton = styled.button`
  background-color: transparent;
  border: transparent;
  fill: var(--color-creamwhite);
`;

const StyledSubmitButton = styled.button`
  background-color: white;
  white-space: nowrap;
  border: #737373 1px solid;
  border-left: none;
  border-radius: 5px;
  height: 25px;
  width: 100px;
  color: var(--color-royalblue);
  text-align: center;
  box-shadow: 0 0.3em 0.5em 0 rgb(0, 0, 0, 0.3);
  margin-bottom: 10px;
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  font-size: medium;
  width: 80%;
  border-radius: 8px;
  margin-bottom: 20px;
`;
