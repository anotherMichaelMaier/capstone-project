import styled from "styled-components";
import Modal from "./Modal";

export default function ModalDelete({
  handleClose,
  handleDelete,
  showModalDelete,
}) {
  return (
    <Modal showModal={showModalDelete}>
      <ModalWrapper>
        <StyledP>Are you sure you are done with the task?</StyledP>
        <StyledDiv>
          <StyledButton onClick={handleClose}>No</StyledButton>
          <StyledButton onClick={handleDelete}>Yes</StyledButton>
        </StyledDiv>
      </ModalWrapper>
    </Modal>
  );
}

const ModalWrapper = styled.div`
  background-color: var(--color-royalblue);
  max-width: 95vw;
  min-height: 20vh;
  border-radius: 15px;
  padding: 10px;
  display: grid;
  align-items: flex-start;
  justify-items: center;
  border: solid black;
`;

const StyledButton = styled.button`
  background-color: white;
  white-space: nowrap;
  border: #737373 1px solid;
  border-left: none;
  border-radius: 5px;
  height: 25px;
  width: 60px;
  color: var(--color-royalblue);
  text-align: center;
  box-shadow: 0 0.3em 0.5em 0 rgb(0, 0, 0, 0.3);
  font-size: large;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
  width: 200px;
`;

const StyledP = styled.p`
  display: flex;
  flex-direction: column;
  background-color: var(--color-creamwhite);
  padding: 10px;
  gap: 5px;
  border-radius: 8px;
  text-align: center;
  margin: 10px 10px;
`;
