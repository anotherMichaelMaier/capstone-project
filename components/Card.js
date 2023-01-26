import styled from "styled-components";
import { useState } from "react";

export default function Card({ name, note, time }) {
  const [toggleDetailsCard, setToggleDetailsCard] = useState(false);
  function handleClick() {
    setToggleDetailsCard(!toggleDetailsCard);
  }
  return (
    <>
      <h1>{name}</h1>
      <button onClick={handleClick}>show details</button>
      {toggleDetailsCard ? (
        <>
          <h2>Notes:</h2>
          <p>{note}</p>
          <h4>Estimated time:</h4>
          <p>{time} minutes</p>
        </>
      ) : (
        ""
      )}
    </>
  );
}
