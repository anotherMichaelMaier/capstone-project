import styled from "styled-components";
import { useState } from "react";

export default function Card({ name, note, time }) {
  const [toggleDetailsCard, setToggleDetailsCard] = useState(false);
  function handleClick() {
    setToggleDetailsCard(!toggleDetailsCard);
  }
  return (
    <>
      <h2>{name}</h2>
      <button onClick={handleClick}>details</button>
      {toggleDetailsCard ? (
        <>
          <h3>Notes:</h3>
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
