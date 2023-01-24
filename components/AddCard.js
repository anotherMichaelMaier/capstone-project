import styled from "styled-components";
import { AddCircleEmpty } from "@/components/Icon.js";
import { useState } from "react";

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
        <AddCircleEmpty />
      </button>
      {toggle ? (
        <StyledForm className="form" onSubmit={handleSubmit}>
          <label className="form__label" htmlFor="name">
            new To-Do:
          </label>
          <input className="form__input" id="name" name="name" type="text" />
          <label className="form__label" htmlFor="name">
            notes:
          </label>
          <textarea className="form__input" id="note" name="note" type="text" />
          <label className="form__label" htmlFor="note">
            estimated time:
          </label>
          <input className="form__input" id="time" name="time" type="text" />
          <button className="form__button" type="submit">
            Add task to list
          </button>
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
