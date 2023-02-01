import FilteredList from "@/components/FilteredList";

export default function doingPage({ tasks }) {
  return (
    <>
      <FilteredList tasks={tasks} positionCheck="doing" />;
    </>
  );
}
