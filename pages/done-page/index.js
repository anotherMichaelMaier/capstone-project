import FilteredList from "@/components/FilteredList";

export default function DonePage({ tasks, updateTask }) {
  return (
    <FilteredList tasks={tasks} updateTask={updateTask} positionCheck="done" />
  );
}
