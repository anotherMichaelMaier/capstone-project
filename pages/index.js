import styled from "styled-components";
import Card from "@/components/Card.js";
import AddCard from "@/components/AddCard";

export default function Homepage({ tasks, createTask }) {
  return (
    <>
      <AddCard createTask={createTask} />
      <Card tasks={tasks} />
    </>
  );
}
