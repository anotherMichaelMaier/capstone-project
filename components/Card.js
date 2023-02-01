import styled from "styled-components";
import { useState } from "react";

export default function Card({ name, note, time }) {
  const [toggleDetailsCard, setToggleDetailsCard] = useState(true);
  function handleClick() {
    setToggleDetailsCard(!toggleDetailsCard);
  }
  return (
    <>
      <h1>{name}</h1>
      {toggleDetailsCard ? (
        <button onClick={handleClick}>show details</button>
      ) : (
        <>
          <button onClick={handleClick}>hide details</button>
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
  /* overflow: scroll; */
  overflow-wrap: break-word;
`;

const StyledUl = styled.ul`
  padding: 0 0 40px 0;
`;
