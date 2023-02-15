import styled from "styled-components";
import Link from "next/link";
import TodoIcon from "@/public/icons/todoIcon.svg";
import DoingIcon from "@/public/icons/doingIcon.svg";
import DoneIcon from "@/public/icons/doneIcon.svg";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <StyledNav>
      <StyledLink href="/" className={router.pathname === "/" ? "active" : ""}>
        <TodoIcon />
      </StyledLink>
      <StyledLink
        href="/doing-page"
        className={router.pathname === "/doing-page" ? "active" : ""}
      >
        <DoingIcon />
      </StyledLink>
      <StyledLink
        href="/done-page"
        className={router.pathname === "/done-page" ? "active" : ""}
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
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: lightgrey;
  z-index: 1;
  box-shadow: 10px 10px 10px 15px grey;
  border-top: solid black;
`;

const StyledLink = styled(Link)`
  padding: 2px;
  margin: 2px;
  font-size: 0.8em;
  font-weight: bold;
  text-decoration: none;
  border-radius: 1rem;
  &.active {
    background-color: var(--color-royalblue);
    fill: var(--color-creamwhite);
  }
`;
