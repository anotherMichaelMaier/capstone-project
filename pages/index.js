import styled from "styled-components";
import AddCard from "@/components/AddCard";
import FilteredList from "@/components/FilteredList";

export default function HomePage({
  tasks,
  createTask,
  updateTask,
  handleDelete,
  setTasks,
}) {
  return (
    <Wrapper>
      <AddCard createTask={createTask} />
      <FilteredList
        tasks={tasks}
        setTasks={setTasks}
        positionCheck="to-do"
        updateTask={updateTask}
        handleDelete={handleDelete}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  margin: 10px 20px;
`;
