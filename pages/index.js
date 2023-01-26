import styled from "styled-components";
import Card from "@/components/Card.js";
import AddCard from "@/components/AddCard";

export default function Homepage({ tasks, createTask }) {
  return (
    <>
      <AddCard createTask={createTask} />
      <StyledUl>
        {tasks.map((tasks) => (
          <StyledLi key={tasks.id}>
            <Card name={tasks.name} notes={tasks.note} time={tasks.time} />
          </StyledLi>
        ))}
      </StyledUl>
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
  padding: 0;
`;
