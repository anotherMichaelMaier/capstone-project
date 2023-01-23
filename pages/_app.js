import GlobalStyle from "@/styles";
import Head from "next/head";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <StyledHeadline>ManageMe</StyledHeadline>
      <Component {...pageProps} />
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
`;
