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
    <>
      <AddCard createTask={createTask} />
      <FilteredList
        tasks={tasks}
        setTasks={setTasks}
        positionCheck="todo"
        updateTask={updateTask}
        handleDelete={handleDelete}
      />
    </>
  );
}
