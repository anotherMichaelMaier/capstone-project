import styled from "styled-components";
import ToDoCard from "@/components/Card.js";
export default function Homepage() {
  return (
    <>
      <header>
        <StyledHeadline>ManageMe</StyledHeadline>
      </header>
      <main>
        <ToDoCard />
      </main>
    </>
  );
}

const StyledHeadline = styled.h1`
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  background-color: grey;
  padding: 20px;
  margin: 0;
`;
