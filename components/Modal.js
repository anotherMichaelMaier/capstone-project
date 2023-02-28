import ReactDOM from "react-dom";
import styled from "styled-components";

export default function Modal({ showModal, children }) {
  const modalContent = showModal && (
    <StyledModalOverlay>{children}</StyledModalOverlay>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
}

const StyledModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
