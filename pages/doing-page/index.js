import FilteredList from "@/components/FilteredList";

export default function DoingPage({
  tasks,
  setTasks,
  updateTask,
  handleDelete,
}) {
  return (
    <FilteredList
      tasks={tasks}
      setTasks={setTasks}
      updateTask={updateTask}
      positionCheck="doing"
      handleDelete={handleDelete}
    />
  );
}
