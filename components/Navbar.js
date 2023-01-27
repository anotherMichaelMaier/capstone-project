import styled from "styled-components";
import Link from "next/link";
import TodoIcon from "@/public/todoIcon.svg";
import ProgressionIcon from "@/public/progressIcon.svg";
import DoneIcon from "@/public/doneIcon.svg";
export default function Navbar() {
  return (
    <StyledNavbar>
      <Link href="/">
        <TodoIcon />
      </Link>
      <Link href="./Doingpage.js">
        <ProgressionIcon />
      </Link>
      <Link href="./Donepage.js">
        <DoneIcon />
      </Link>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: space-around;
  background-color: grey;
  fill: white;
  stroke: black;
`;
