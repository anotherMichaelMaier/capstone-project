import GlobalStyle from "@/styles";
import Head from "next/head";
import styled from "styled-components";
import userTasks from "../db.json";
import useLocalStorageState from "use-local-storage-state";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps, state }) {
  const [tasks, setTasks] = useLocalStorageState("tasks", {
    defaultValue: [...userTasks],
  });
  function createTask(newTask) {
    setTasks((oldTasks) => [
      {
        ...newTask,
        id: crypto.randomUUID(),
        position: "todo",
      },
      ...oldTasks,
    ]);
  }
  function updateTask(taskId, updatedTask) {
    setTasks((oldTasks) => {
      const newTasks = oldTasks.map((oldTask) => {
        if (oldTask.id === taskId) {
          return updatedTask;
        } else {
          return oldTask;
        }
      });
      return newTasks;
    });
  }
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <StyledHeadline>ManageMe</StyledHeadline>
      <Component
        {...pageProps}
        createTask={createTask}
        tasks={tasks}
        updateTask={updateTask}
      />
      <Navbar />
    </>
  );
}

const StyledHeadline = styled.h1`
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  background-color: grey;
  padding: 20px;
  margin: 0;
  color: white;
`;
