import FilteredList from "@/components/FilteredList";

export default function DonePage({
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
      positionCheck="done"
      handleDelete={handleDelete}
    />
  );
}
