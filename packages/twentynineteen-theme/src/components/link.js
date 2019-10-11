import React from "react";
import { connect, styled } from "frontity";

const Link = ({ actions, link, className, children }) => {
  const onClick = event => {
    // Do nothing if it's an external link
    if (link.startsWith("http")) return;

    event.preventDefault();
    // Set the router to the new url.
    actions.router.set(link);
    window.scrollTo(0, 0);
  };

  return (
    <LinkEl href={link} onClick={onClick} className={className}>
      {children}
    </LinkEl>
  );
};

const LinkEl = styled.a`
  &:focus {
    outline: thin dotted;
    text-decoration: underline;
  }
`;

export default connect(Link);
