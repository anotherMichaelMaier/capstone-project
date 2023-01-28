import GlobalStyle from "@/styles";
import Head from "next/head";
import styled from "styled-components";
import userTasks from "../db.json";
import useLocalStorageState from "use-local-storage-state";
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
      },
      ...oldTasks,
    ]);
  }
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <StyledHeadline>ManageMe</StyledHeadline>
      <Component {...pageProps} createTask={createTask} tasks={tasks} />
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
