import styled from "styled-components";

export default function Card({ tasks }) {
  return (
    <StyledUl>
      {tasks.map((task) => (
        <StyledCard key={task.id}>
          <h2>{task.name}</h2>
          <h3>Notes:</h3>
          <p>{task.note}</p>
          <h4>Estimated time:</h4>
          <p>{task.time} minutes</p>
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
`;

const StyledUl = styled.ul`
  padding: 0;
`;
