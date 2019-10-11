import React from "react";
import { connect, styled } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Section id="primary">
      <Article>
        {/* If the list is an author, we render a title. */}
        {data.isAuthor ? (
          <Header>
            Author Archives:{" "}
            <PageDescription>
              {state.source.author[data.id].name}
            </PageDescription>
          </Header>
        ) : null}

        {/* If the list is a taxonomy or category, we render a title. */}
        {data.isTaxonomy || data.isCategory ? (
          <Header>
            {data.taxonomy.charAt(0).toUpperCase() + data.taxonomy.slice(1)}{" "}
            Archives:{" "}
            <PageDescription>
              {state.source[data.taxonomy][data.id].name}
            </PageDescription>
          </Header>
        ) : null}

        {/* Iterate over the items of the list. */}
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <Item key={item.id} item={item} />;
        })}
        <Pagination />
      </Article>
    </Section>
  );
};

export default connect(List);

const Section = styled.section`
  margin: 0;
  list-style: none;
`;

const Article = styled.article``;

const Header = styled.h3`
  font-family: "Hoefler Text", "Baskerville Old Face", Garamond,
    "Times New Roman", serif;
  font-size: 1.125em;
  font-weight: normal;
  clear: both;
  margin: 1rem 1rem calc(3 * 1rem);
  color: #767676;
  letter-spacing: normal;

  & span {
    display: block;
    color: #111;
    font-size: 1em;
  }
  & span:after {
    content: ".";
    font-weight: bold;
    color: #111;
  }

  @media screen and (min-width: 768px) {
    margin: 0 calc(10% + 60px);
  }
`;

const PageDescription = styled.span`
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  @media (prefers-color-scheme: dark) {
    color: #767676 !important;
  }
`;
