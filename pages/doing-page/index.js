import styled from "styled-components";
import Card from "@/components/Card";

export default function DoingPage({ tasks }) {
  console.log(tasks);
  const doingTasks = tasks.filter((task) => task.position === "doing");

  return (
    <StyledUl>
      {doingTasks.map((doing) => (
        <StyledLi key={doing.id}>
          <Card name={doing.name} note={doing.note} time={doing.time} />
        </StyledLi>
      ))}
    </StyledUl>
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
  padding: 60px 0 40px 0;
`;
