import styled from "styled-components";
import { useState } from "react";
import IconAdd from "@/public/add_circle_empty.svg";

export default function AddCard({ createTask }) {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    setToggle(!toggle);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    createTask(data);

    event.target.reset();
    setToggle(!toggle);
  }

  return (
    <StyledDiv>
      <button onClick={handleClick}>
        <IconAdd />
      </button>
      {toggle ? (
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="name">new To-Do:</label>
          <input
            id="name"
            name="name"
            type="text"
            pattern="^[a-zA-Z0-9][a-zA-Z0-9-_ .]{1,70}"
            required
          />
          <label htmlFor="note">notes:</label>
          <textarea id="note" name="note" type="text" pattern="^.{3,}[]" />
          <label htmlFor="time">estimated time:</label>
          <input id="time" name="time" type="number" max={999} required />
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
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
