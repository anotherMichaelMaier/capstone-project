import styled from "styled-components";
import { useState } from "react";

export default function Card({
  name,
  note,
  time,
  moveTaskToPreviousState,
  moveTaskToNextState,
  previousState,
  nextState,
}) {
  const [toggleDetailsCard, setToggleDetailsCard] = useState(true);

  function handleClick() {
    setToggleDetailsCard(!toggleDetailsCard);
  }
  return (
    <>
      <h2>{name}</h2>
      <div>
        {previousState && (
          <button onClick={moveTaskToPreviousState}>{previousState}</button>
        )}
        <button onClick={handleClick}>
          {toggleDetailsCard ? "show details" : "hide details"}
        </button>
        {nextState && (
          <button onClick={moveTaskToNextState}>{nextState}</button>
        )}
      </div>
      {toggleDetailsCard ? null : (
        <>
          {note && <h2>Notes:</h2>}
          <p>{note}</p>
          {time && <h4>Estimated time:</h4>}
          {time && <p>{time} minutes</p>}
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
