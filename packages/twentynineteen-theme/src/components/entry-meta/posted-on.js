import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import DateIcon from "../icons/date-icon";

const PostedOn = ({ state, post }) => {
  const date = new Date(post.date);

  return (
    <Wrapper>
      <DateIcon />
      <Link link={post.link}>{date.toDateString()}</Link>
    </Wrapper>
  );
};

export default connect(PostedOn);

const Wrapper = styled.span`
  display: inline;
  margin-right: 16px;

  & a {
    font-weight: 500;
    font-size: 0.71111em;
    padding: 10px 0px 17px;
  }

  & svg {
    margin-right: 0.5em;
    transition: fill 120ms ease-in-out 0s;
    position: relative;
    vertical-align: middle;
  }
`;
