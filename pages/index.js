import AddCard from "@/components/AddCard";
import FilteredList from "@/components/FilteredList";

export default function HomePage({ tasks, createTask }) {
  return (
    <>
      <AddCard createTask={createTask} />
      <FilteredList tasks={tasks} positionCheck="todo" />;
    </>
  );
}
