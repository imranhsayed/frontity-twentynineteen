import React from "react";
import { connect, styled } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ( { state } ) => {
  // Get the data of the current list.
  const data = state.source.get( state.router.link );
  
  return (
    <Section id="primary" className="content-area hfeed">
		<Article className="post entry">
			
			{ /* If the list is an author, we render a title. */ }
			{ ( data.isAuthor ) ? (
				<Header className="page-title">Author Archives: <span className="page-description">{ state.source.author[data.id].name }</span></Header>
			) : null }

			{ /* If the list is a taxonomy or category, we render a title. */ }
			{ ( data.isTaxonomy || data.isCategory ) ? (
				<Header className="page-title">{ data.taxonomy.charAt(0).toUpperCase() + data.taxonomy.slice(1) } Archives: <span className="page-description">{ state.source[data.taxonomy][data.id].name }</span></Header>
			) : null }

			{ /* Iterate over the items of the list. */ }
			{ data.items.map( ( { type, id } ) => {
				const item = state.source[type][id];
				// Render one Item component for each one.
				return <Item key={ item.id } item={ item }/>;
			} ) }
			<Pagination/>
		</Article>
    </Section>
  );
};

export default connect( List );

const Section = styled.section`
  margin: 0;
  list-style: none;
`;

const Article = styled.article``;

const Header = styled.h3`
	font-family: "Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif;
	font-size: 1.125em;
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
		color: #767676;
	}

	@media screen and ( min-width: 768px ) {
		margin: 0 calc( 10% + 60px ) calc( 10% + 60px );
	}
`;
