import styled from "styled-components";
import Card from "@/components/Card";

export default function FilteredList({ tasks, positionCheck }) {
  const filteredTasks = tasks.filter((task) => task.position === positionCheck);
  return (
    <StyledUl>
      {filteredTasks.map((mappedTask) => (
        <StyledLi key={mappedTask.id}>
          <Card
            name={mappedTask.name}
            note={mappedTask.note}
            time={mappedTask.time}
          />
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
  margin: 20px;
  overflow-wrap: break-word;
`;

const StyledUl = styled.ul`
  padding: 60px 0 40px 0;
`;
