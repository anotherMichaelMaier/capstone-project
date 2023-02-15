import styled from "styled-components";
import { useState } from "react";
import dynamic from "next/dynamic";
import DeleteTask from "@/public/icons/DeleteTask.svg";

const ModalEditCard = dynamic(() => import("../components/ModalEditCard"), {
  ssr: false,
});
const ModalDeleteTask = dynamic(() => import("../components/ModalDeleteTask"), {
  ssr: false,
});

export default function Card({
  id,
  name,
  note,
  time,
  tasks,
  setTasks,
  updateTask,
  handleDelete,
  moveTaskToPreviousState,
  moveTaskToNextState,
  previousState,
  nextState,
}) {
  const [toggleDetailsCard, setToggleDetailsCard] = useState(true);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  function handleClick() {
    setToggleDetailsCard(!toggleDetailsCard);
  }
  return (
    <StyledCard>
      <StyledH2>
        {previousState === "doing" ? (
          <DoneTaskStyle>{name}</DoneTaskStyle>
        ) : (
          <>{name}</>
        )}
      </StyledH2>
      <StyledDeleteButton onClick={() => setShowModalDelete(true)}>
        <DeleteTask />
      </StyledDeleteButton>
      <ModalDeleteTask
        showModalDelete={showModalDelete}
        handleDelete={handleDelete}
        handleClose={() => {
          setShowModalDelete(false);
        }}
      />
      <StyledNavDiv>
        {previousState && (
          <StyledNavButtons column={1} onClick={moveTaskToPreviousState}>
            {previousState}
          </StyledNavButtons>
        )}
        <StyledDetailsButton column={2} onClick={handleClick}>
          {toggleDetailsCard ? "show details" : "hide details"}
        </StyledDetailsButton>
        {nextState && (
          <StyledNavButtons column={3} onClick={moveTaskToNextState}>
            {nextState}
          </StyledNavButtons>
        )}
      </StyledNavDiv>
      {toggleDetailsCard ? null : (
        <>
          <StyledDetails>
            <StyledInput>
              {note && <StyledH>Notes:</StyledH>}
              <StyledP>{note}</StyledP>
            </StyledInput>
            <StyledInput>
              {time && <StyledH>Estimated time:</StyledH>}
              {time && <StyledP>{time} minutes</StyledP>}
            </StyledInput>
          </StyledDetails>
          <StyledButton onClick={() => setShowModalEdit(true)}>
            edit details
          </StyledButton>
          <ModalEditCard
            id={id}
            name={name}
            note={note}
            time={time}
            tasks={tasks}
            setTasks={setTasks}
            updateTask={updateTask}
            handleClose={() => setShowModalEdit(false)}
            showModalEdit={showModalEdit}
          />
        </>
      )}
    </StyledCard>
  );
}

const StyledCard = styled.div`
  padding: 10px 0 0 0;
  position: relative;
  text-align: center;
  color: var(--color-creamwhite);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDeleteButton = styled.div`
  position: absolute;
  background-color: transparent;
  border: transparent;
  right: 5px;
  top: 5px;
  margin: 0;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--color-creamwhite);
`;

const StyledNavDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-bottom: 10px;
`;

const StyledNavButtons = styled.button`
  grid-column: ${(props) => props.column};
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
`;

const StyledDetailsButton = styled.button`
  grid-column: ${(props) => props.column};
  background-color: white;
  white-space: nowrap;
  border: #737373 1px solid;
  border-left: none;
  border-radius: 5px;
  height: 25px;
  width: 90px;
  color: var(--color-royalblue);
  text-align: center;
  box-shadow: 0 0.3em 0.5em 0 rgb(0, 0, 0, 0.3);
`;

const StyledButton = styled.button`
  grid-column: ${(props) => props.column};
  background-color: white;
  white-space: nowrap;
  border: #737373 1px solid;
  border-left: none;
  border-radius: 5px;
  height: 25px;
  width: 90px;
  color: var(--color-royalblue);
  text-align: center;
  box-shadow: 0 0.3em 0.5em 0 rgb(0, 0, 0, 0.3);
  margin-bottom: 10px;
`;

const StyledP = styled.p`
  font-size: medium;
  width: 80%;
  margin: 0 0 10px 0;
`;

const StyledH = styled.h2`
  font-size: medium;
  margin: 0;
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  font-size: medium;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 20px;
  :first-child {
    margin-top: 10px;
  }
`;

const StyledH2 = styled.h2`
  width: 80%;
  text-align: center;
`;

const DoneTaskStyle = styled.div`
  text-decoration: line-through;
  text-decoration-color: black;
  text-decoration-thickness: 2px;
`;
