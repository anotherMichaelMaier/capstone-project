import styled from "styled-components";
import ToDoCard from "components/ToDoCard.js";
export default function Homepage() {
  return (
    <>
      <header>
        <h1>ManageMe</h1>
      </header>
      <main>
        <ToDoCard />
      </main>
    </>
  );
}
