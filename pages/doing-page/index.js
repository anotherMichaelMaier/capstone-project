import FilteredList from "@/components/FilteredList";

export default function DoingPage({ tasks }) {
  return (
    <>
      <FilteredList tasks={tasks} positionCheck="doing" />;
    </>
  );
}
