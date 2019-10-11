import React from "react";
import { connect, styled } from "frontity";

const Footer = () => {
  return (
    <footer>
      <SiteInfo>
        <SiteInfoLinks
          href="https://codeytek.com/frontity-twentynineteen"
          target="_blank"
          rel="noopener"
        >
          Twentynineteen Frontity Theme,
        </SiteInfoLinks>{" "}
        <SiteInfoLinks
          href="https://frontity.org"
          target="_blank"
          rel="noopener"
        >
          proudly powered by WordPress &#38; Frontity.
        </SiteInfoLinks>
      </SiteInfo>
    </footer>
  );
};

export default connect(Footer);

const SiteInfo = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 0.71111em;
  padding: 2rem;
  width: 100%;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  word-wrap: break-word;
  text-align: center;
`;

const SiteInfoLinks = styled.a`
  color: #767676;
  padding: 10px 0px 17px;

  :hover {
    color: ${({ theme }) => theme.color};
  }
`;

const FooterLine = styled.hr`
   {
    margin: calc(3 * 1rem) 0 calc(1.5 * 1rem) 0;
    background-color: #767676;
    border: 0;
    height: 2px;
  }
`;
