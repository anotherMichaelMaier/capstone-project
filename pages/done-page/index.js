import FilteredList from "@/components/FilteredList";

export default function DonePage({ tasks }) {
  return (
    <>
      <FilteredList tasks={tasks} positionCheck="done" />
    </>
  );
}
