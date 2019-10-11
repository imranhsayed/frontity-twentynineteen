import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";

const Header = ({ state }) => (
  <Container>
    <SiteBrandingContainer>
      <SiteBranding>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <Nav />
      </SiteBranding>
    </SiteBrandingContainer>
  </Container>
);

export default connect(Header);

const SiteBrandingContainer = styled.div``;

const SiteBranding = styled.div`
  @media only screen and (min-width: 768px) {
    margin: 0px calc(10% + 60px);
  }
`;

const Container = styled.header`
  box-sizing: border-box;
  color: #fff;
  margin: 0;
  padding: 1em;

  @media only screen and (min-width: 768px) {
    margin: 0px;
    padding: 3rem 0;
  }
`;

const Title = styled.h1`
  display: inline;
  margin: auto;
  color: #111;
  font-weight: normal;
  font-size: 1.125em;

  &:not(.site-title):before {
    display: none;
  }

  &:focus {
    outline: thin dotted;
    text-decoration: underline;
  }
`;

const Description = styled.p`
  display: inline;
  color: #767676;
  font-weight: normal;
  margin: 0;
  letter-spacing: -0.01em;
  font-size: 1.125em;
  line-height: 30.9375px;
  -webkit-hyphens: initial;
  -moz-hyphens: initial;
  -ms-hyphens: initial;
  hyphens: initial;
  font-family: NonBreakingSpaceOverride, "Hoefler Text", "Baskerville Old Face",
    Garamond, "Times New Roman", serif;

  &:before {
    content: "\\2014";
    margin: 0 0.4em;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
  display: inline;

  &:focus {
    outline: none;
  }
`;
