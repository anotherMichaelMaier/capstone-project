import styled from "styled-components";
import { useState } from "react";

export default function Card({ name, note, time, position }) {
  const [toggleDetailsCard, setToggleDetailsCard] = useState(true);
  const [state, setState] = useState(position);
  const possibleStates = ["todo", "doing", "done"];
  const indexOfCurrentState = possibleStates.findIndex(
    (possibleState) => possibleState === position
  );
  const previousState = possibleStates[indexOfCurrentState - 1];
  const nextState = possibleStates[indexOfCurrentState + 1];
  function handleClick() {
    setToggleDetailsCard(!toggleDetailsCard);
  }
  return (
    <>
      <h2>{name}</h2>
      <div>
        {previousState && (
          <button on Click={() => setState(previousState)}>
            {previousState}
          </button>
        )}
        <button onClick={handleClick}>
          {toggleDetailsCard ? "show details" : "hide details"}
        </button>
        {nextState ? (
          <button onClick={() => setState(nextState)}>{nextState}</button>
        ) : null}
      </div>
      {toggleDetailsCard ? null : (
        <>
          <h2>Notes:</h2>
          <p>{note}</p>
          <h4>Estimated time:</h4>
          <p>{time} minutes</p>
        </>
      )}
    </>
  );
}

const StyledLi = styled.li`
  border: solid;
  border-color: blue;
  text-align: center;
  list-style: none;
  margin: 20px 20px;
  overflow-wrap: break-word;
`;

const StyledUl = styled.ul`
  padding: 0 0 40px 0;
`;
