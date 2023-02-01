import styled from "styled-components";
import Card from "@/components/Card";

export default function DoingPage({ tasks }) {
  console.log(tasks);
  const doneTasks = tasks.filter((task) => task.position === "done");

  return (
    <StyledUl>
      {doneTasks.map((done) => (
        <StyledLi key={done.id}>
          <Card name={done.name} note={done.note} time={done.time} />
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
