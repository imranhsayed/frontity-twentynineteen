import React from "react";
import { styled } from "frontity";
import Loader from "react-spinners/ScaleLoader";

const Loading = () => (
  <Container>
    <Loader
      color="#008077"
      radius={0}
      margin="3px"
      width={5}
      height={25}
   />
  </Container>
);

export default Loading;

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 24px;
  }
`;
