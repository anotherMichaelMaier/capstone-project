import styled from "styled-components";
import { useState } from "react";

export default function Card({ tasks }) {
  const [toggleCardsize, setToggleCardsize] = useState(false);
  function handleClick() {
    setToggleCardsize(!toggleCardsize);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <StyledUl>
      {tasks.map((task) => (
        <StyledCard key={task.id}>
          <h2>{task.name}</h2>
          <button onClick={handleClick}>details</button>
          {toggleCardsize ? (
            <>
              <h3>Notes:</h3>
              <p>{task.note}</p>
              <h4>Estimated time:</h4>
              <p>{task.time} minutes</p>
            </>
          ) : (
            ""
          )}
        </StyledCard>
      ))}
    </StyledUl>
  );
}

const StyledCard = styled.li`
  border: solid;
  border-color: blue;
  text-align: center;
  list-style: none;
  margin: 20px 20px;
  /* overflow: scroll; */
  overflow-wrap: break-word;
`;

const StyledUl = styled.ul`
  padding: 0;
`;
