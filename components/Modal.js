import React, { useEffect, useState } from "react";
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
`;
