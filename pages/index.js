import styled from "styled-components";
import Card from "@/components/Card.js";
import AddCard from "@/components/AddCard";

export default function HomePage({ tasks, createTask }) {
  const todoTasks = tasks.filter((task) => task.position === "todo");
  return (
    <>
      <AddCard createTask={createTask} />
      <StyledUl>
        {todoTasks.map((todo) => (
          <StyledLi key={todo.id}>
            <Card name={todo.name} note={todo.note} time={todo.time} />
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
  padding: 0 0 40px 0;
`;
