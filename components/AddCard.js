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
          <StyledInputDiv>
            <label htmlFor="name">task:</label>
            <StyledInput
              id="name"
              name="name"
              type="text"
              maxLength="40"
              pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖ.]{1,70}"
              onChange={(event) => setCountName(event.target.value.length)}
              required
            />
            <CharacterCounter maxLength={40} counter={countName} />
          </StyledInputDiv>
          <StyledInputDiv>
            <label htmlFor="note">notes:</label>
            <StyledTextArea
              id="note"
              name="note"
              type="text"
              rows="5"
              maxLength="200"
              pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖ.]{1,1000}"
              onChange={(event) => setCountNote(event.target.value.length)}
            />
            <CharacterCounter maxLength={200} counter={countNote} />
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
              required
            />
          </StyledInputDiv>
          <StyledSubmitButton type="submit">submit task</StyledSubmitButton>
        </StyledForm>
      )}
    </StyledFormCard>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  color: var(--color-creamwhite);
`;

const StyledInput = styled.input`
  border: solid black;
  :focus {
    outline-color: var(--color-lightblue);
  }
`;

const StyledTextArea = styled.textarea`
  border: solid black;
  outline-color: var(--color-lightblue);
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
  padding: 2px 2px 0 2px;
  margin: 2px;
  text-decoration: none;
  border-radius: 1rem;
  background-color: var(--color-creamwhite);
  border: transparent;
  fill: black;
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

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: medium;
  width: 80%;
  border-radius: 8px;
  margin-bottom: 20px;
`;
