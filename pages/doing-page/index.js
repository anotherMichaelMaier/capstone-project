import FilteredList from "@/components/FilteredList";

export default function DoingPage({ tasks, updateTask }) {
  return (
    <FilteredList tasks={tasks} updateTask={updateTask} positionCheck="doing" />
  );
}
