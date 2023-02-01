import FilteredList from "@/components/FilteredList";

export default function donePage({ tasks }) {
  return (
    <>
      <FilteredList tasks={tasks} positionCheck="done" />;
    </>
  );
}
