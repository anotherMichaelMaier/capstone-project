import styled from "styled-components";
import { useState } from "react";
import dynamic from "next/dynamic";

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
    <>
      <h2>{name}</h2>
      <button onClick={() => setShowModalDelete(true)}>X</button>
      <ModalDeleteTask
        showModalDelete={showModalDelete}
        handleDelete={handleDelete}
        handleClose={() => {
          setShowModalDelete(false);
        }}
      />
      <div>
        {previousState && (
          <button onClick={moveTaskToPreviousState}>{previousState}</button>
        )}
        <button onClick={handleClick}>
          {toggleDetailsCard ? "show details" : "hide details"}
        </button>
        {nextState && (
          <button onClick={moveTaskToNextState}>{nextState}</button>
        )}
      </div>
      {toggleDetailsCard ? null : (
        <>
          {note && <h2>Notes:</h2>}
          <p>{note}</p>
          {time && <h4>Estimated time:</h4>}
          {time && <p>{time} minutes</p>}
          <div>
            <button onClick={() => setShowModalEdit(true)}>edit details</button>
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
          </div>
        </>
      )}
    </>
  );
}
