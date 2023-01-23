import styled from "styled-components";
import { AddCircleEmpty } from "@/components/Icon.js";
import { useState } from "react";
export default function AddCard() {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <StyledDiv>
      <button onClick={handleClick}>
        <AddCircleEmpty />
      </button>
      {toggle ? (
        <StyledForm className="form">
          <label className="form__label" htmlFor="todo">
            new To-Do:
          </label>
          <input className="form__input" id="todo" type="text" />
          <label className="form__label" htmlFor="todo">
            notes:
          </label>
          <input className="form__input" id="todo" type="text" />
          <label className="form__label" htmlFor="todo">
            estimated time:
          </label>
          <input className="form__input" id="todo" type="text" />
          <button className="form__button">Add</button>
        </StyledForm>
      ) : (
        ""
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  border: solid blue;
  margin-top: 90px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
