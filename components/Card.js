import styled from "styled-components";
import { useState } from "react";
import dynamic from "next/dynamic";

const ModalEditCard = dynamic(() => import("../components/ModalEditCard"));
export default function Card({
  id,
  name,
  note,
  time,
  tasks,
  updateTask,
  moveTaskToPreviousState,
  moveTaskToNextState,
  previousState,
  nextState,
}) {
  const [toggleDetailsCard, setToggleDetailsCard] = useState(true);
  const [showModal, setShowModal] = useState(false);
  function handleClick() {
    setToggleDetailsCard(!toggleDetailsCard);
  }
  return (
    <>
      <h2>{name}</h2>
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
            <button onClick={() => setShowModal(true)}>edit details</button>
            <ModalEditCard
              id={id}
              name={name}
              note={note}
              time={time}
              tasks={tasks}
              updateTask={updateTask}
              onClose={() => setShowModal(false)}
              showModal={showModal}
            />
          </div>
        </>
      )}
    </>
  );
}
