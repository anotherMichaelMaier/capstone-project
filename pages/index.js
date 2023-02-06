import AddCard from "@/components/AddCard";
import FilteredList from "@/components/FilteredList";

export default function HomePage({ tasks, createTask, updateTask }) {
  return (
    <>
      <AddCard createTask={createTask} />
      <FilteredList
        tasks={tasks}
        positionCheck="todo"
        updateTask={updateTask}
      />
    </>
  );
}
