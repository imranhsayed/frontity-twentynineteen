import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./link";

const Nav = ({ state }) => (
  <Container id="site-navigation" ariaLabel="Top Menu">
    {state.theme.menu.map(([name, link]) => (
      <Item key={name} isSelected={state.router.link === link}>
        <Link link={link}>{name}</Link>
      </Item>
    ))}
  </Container>
);

export default connect(Nav);

const Container = styled.nav`
  list-style: none;
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  padding-bottom: 0.125rem;
  flex-flow: row wrap;
`;

const Item = styled.div`
  padding: 0;
  color: #fff;
  font-size: 1em;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-right: 0.75rem;
  margin-bottom: 0.25rem;
  & > a {
    display: inline-block;
    line-height: 1.125;
    font-size: 1.25em;
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    font-weight: 700;
    font-size: 1.125em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
