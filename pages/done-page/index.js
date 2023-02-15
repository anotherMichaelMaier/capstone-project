import styled from "styled-components";
import FilteredList from "@/components/FilteredList";

export default function DonePage({
  tasks,
  setTasks,
  updateTask,
  handleDelete,
}) {
  return (
    <Wrapper>
      <FilteredList
        tasks={tasks}
        setTasks={setTasks}
        updateTask={updateTask}
        positionCheck="done"
        handleDelete={handleDelete}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10px 20px;
`;
