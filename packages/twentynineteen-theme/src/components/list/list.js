import React from "react";
import { connect, styled } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Section id="primary" className="content-area hfeed">
		<Article className="post entry">
			{/* If the list is a taxonomy, we render a title. */}
			{data.isTaxonomy && (
				<Header className="entry-header">
					{data.taxonomy}: {state.source[data.taxonomy][data.id].name}
				</Header>
			)}

			{/* If the list is an author, we render a title. */}
			{data.isAuthor && (
				<Header className="entry-header">Author: {state.source.author[data.id].name}</Header>
			)}

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
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
