import styled from "styled-components";
import Card from "@/components/Card";

export default function FilteredList({
  tasks,
  setTasks,
  positionCheck,
  updateTask,
  handleDelete,
}) {
  const filteredTasks = tasks.filter((task) => task.position === positionCheck);
  return (
    <StyledUl>
      {filteredTasks.map((mappedTask) => {
        const possibleStates = ["to-do", "doing", "done"];
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
              updateTask={updateTask}
              tasks={tasks}
              setTasks={setTasks}
              id={mappedTask.id}
              handleDelete={() => handleDelete(mappedTask.id)}
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
  border: solid black;
  background-color: var(--color-royalblue);
  border-radius: 15px;
  box-shadow: 5px 5px 15px 0.5px grey;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  word-break: break-word;
  gap: 30px;
  padding: 15px 15px 70px 15px;
`;
