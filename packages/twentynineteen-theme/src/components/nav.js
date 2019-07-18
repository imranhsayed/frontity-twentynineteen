import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Nav = ( { state } ) => (
  <Container id="site-navigation" className="main-navigation" ariaLabel="Top Menu">
    { state.theme.menu.map( ( [ name, link ] ) => (
      <Item key={ name } isSelected={ state.router.link === link }>
        <Link link={ link }>{ name }</Link>
      </Item>
    ) ) }
  </Container>
);

export default connect( Nav );

const Container = styled.nav`
  list-style: none;
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: auto;
`;

const Item = styled.div`
  padding: 0;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-right: 0.5rem;

  & > a {
    display: inline-block;
    line-height: 1.125;
    font-size: 1.125em;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
