import GlobalStyle from "@/styles";
import Head from "next/head";
import styled from "styled-components";
import userTasks from "../db.json";
import useLocalStorageState from "use-local-storage-state";
import Logo from "@/public/logo/Logo.svg";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  const [tasks, setTasks] = useLocalStorageState("tasks", {
    defaultValue: [...userTasks],
  });
  function createTask(newTask) {
    setTasks((oldTasks) => [
      {
        ...newTask,
        id: crypto.randomUUID(),
        position: "to-do",
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
  function handleDelete(taskId) {
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== taskId));
    console.log(taskId);
  }
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <StyledHeadline>
        <Logo />
      </StyledHeadline>
      <Component
        {...pageProps}
        createTask={createTask}
        tasks={tasks}
        updateTask={updateTask}
        handleDelete={handleDelete}
        setTasks={setTasks}
      />
      <Navbar />
    </>
  );
}

const StyledHeadline = styled.h1`
  position: sticky;
  top: 0;
  text-align: center;
  padding: 10px 0 0 0;
  margin: 0;
  background-color: white;
  box-shadow: 3px 3px 3px 2px grey;
  z-index: 1;
  border-bottom: solid black;
`;
