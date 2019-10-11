import React from "react";
import { styled } from "frontity";

const Page404 = () => (
  <Container>
    <Title>Oops! That page can’t be found.404</Title>
  </Container>
);

export default Page404;

const Container = styled.div`
  padding: 1em;

  & h1:before {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin: 0 calc(10% + 60px) calc(10% + 60px);
    padding: 0;
  }
`;

const Title = styled.h1`
  color: #767676;
  display: inline;
  letter-spacing: normal;
  font-size: 37.125px;

  @media screen and (min-width: 768px) {
    padding: 0;
    font-size: 47.125px;
  }
`;
