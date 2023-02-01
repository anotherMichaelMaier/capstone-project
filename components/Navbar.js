import styled from "styled-components";
import Link from "next/link";
import TodoIcon from "@/public/todoIcon.svg";
import ProgressionIcon from "@/public/progressIcon.svg";
import DoneIcon from "@/public/doneIcon.svg";
export default function Navbar() {
  return (
    <StyledNav>
      <StyledLink
        href="/"
        className={location.pathname === "/" ? "active" : ""}
      >
        <TodoIcon />
      </StyledLink>
      <StyledLink
        href="/doing-page"
        className={location.pathname === "/doing-page" ? "active" : ""}
      >
        <ProgressionIcon />
      </StyledLink>
      <StyledLink
        href="/done-page"
        className={location.pathname === "/done-page" ? "active" : ""}
      >
        <DoneIcon />
      </StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
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

const StyledLink = styled(Link)`
  &.active {
    fill: blue;
    stroke: white;
  }
`;
