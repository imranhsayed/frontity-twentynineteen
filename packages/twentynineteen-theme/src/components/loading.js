import React from "react";
import { connect, styled } from "frontity";
import Loader from "react-spinners/ScaleLoader";

const Loading = ({ state }) => (
  <Container>
    <Loader
      color={state.theme.color}
      radius={0}
      margin="3px"
      width={5}
      height={25}
    />
  </Container>
);

export default connect(Loading);

const Container = styled.div`
  margin: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 24px;
  }
`;
