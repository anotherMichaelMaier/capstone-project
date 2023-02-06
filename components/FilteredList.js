import styled from "styled-components";
import Card from "@/components/Card";

export default function FilteredList({ tasks, positionCheck, updateTask }) {
  const filteredTasks = tasks.filter((task) => task.position === positionCheck);
  return (
    <StyledUl>
      {filteredTasks.map((mappedTask) => {
        const possibleStates = ["todo", "doing", "done"];
        const indexOfCurrentState = possibleStates.findIndex(
          (possibleState) => possibleState === mappedTask.position
        );
        const previousState = possibleStates[indexOfCurrentState - 1];
        const nextState = possibleStates[indexOfCurrentState + 1];
        return (
          <StyledLi key={mappedTask.id}>
            <Card
              name={mappedTask.name}
              note={mappedTask.note}
              time={mappedTask.time}
              moveTaskToPreviousState={() =>
                updateTask(mappedTask.id, {
                  ...mappedTask,
                  position: previousState,
                })
              }
              previousState={previousState}
              moveTaskToNextState={() =>
                updateTask(mappedTask.id, {
                  ...mappedTask,
                  position: nextState,
                })
              }
              nextState={nextState}
            />
          </StyledLi>
        );
      })}
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
