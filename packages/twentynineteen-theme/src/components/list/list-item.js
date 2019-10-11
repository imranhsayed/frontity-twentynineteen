import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import Author from "../entry-meta/author";
import PostedOn from "../entry-meta/posted-on";
import Categories from "../entry-meta/categories";
import Tags from "../entry-meta/tags";

const Item = ({ state, item }) => (
  <>
    <EntryHeader>
      <Title>
        <Link link={item.link} aria-label={item.title}>
          <span dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>
      </Title>
      {state.theme.featured.showOnList ? (
        <Link link={item.link}>
          <FeaturedMedia id={item.featured_media} />
        </Link>
      ) : null}
      <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
    </EntryHeader>
    <EntryFooter>
      <Author authorId={item.author} />
      <PostedOn post={item} />
      <Categories cats={item.categories.slice(0, 2)} />
      <Tags tags={item.tags.slice(0, 2)} />
    </EntryFooter>
  </>
);

export default connect(Item);

const EntryHeader = styled.article`
  position: relative;
  margin: calc(3rem) 1rem 1rem;
  line-height: 1.6775em;

  & a {
    color: #111;
    font-size: 0.7em;
    letter-spacing: -0.02em;
  }

  @media (prefers-color-scheme: dark) {
    & a {
      color: white;
    }
  }

  @media only screen and (min-width: 768px) {
    margin: calc(3rem) calc(10% + 60px) calc(0.5rem);

    & a {
      font-size: 0.825em;
    }
  }
`;

const Title = styled.h1`
  margin: 0px 0 1rem !important;

  &:before {
    content: " ";
    display: block;
    height: 2px;
    width: 1em;
    background: rgb(118, 118, 118);
    margin: 1rem 0px;
  }
`;

const Excerpt = styled.div`
  line-height: 1.8;
  color: #111;
  margin: 0;
  overflow: hidden;

  & p {
    margin: 32px 0;
    font-family: NonBreakingSpaceOverride, "Hoefler Text",
      "Baskerville Old Face", Garamond, "Times New Roman", serif;
  }

  @media only screen and (min-width: 768px) {
    max-width: calc(8 * (100vw / 12) - 28px);
  }

  @media only screen and (min-width: 1168px) {
    max-width: calc(9 * (100vw / 12) - 28px);
  }
`;

const EntryFooter = styled.div`
  margin: calc(0rem) 1rem 1rem;
  line-height: 1em;
  color: rgb(118, 118, 118);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  @media only screen and (min-width: 768px) {
    margin: calc(0rem) calc(10% + 60px) calc(0.5rem);
  }
`;
