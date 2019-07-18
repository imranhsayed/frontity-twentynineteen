import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import Author from "../entry-meta/author";
import PostedOn from "../entry-meta/posted-on";
import Categories from "../entry-meta/categories";
import Tags from "../entry-meta/tags";

const Item = ( { state, item } ) => (
	<>
		<article className="entry-header">
			<Title className="entry-title">
				<Link link={ item.link } ><span dangerouslySetInnerHTML={ { __html: item.title.rendered } }/></Link>
			</Title>
			{ state.theme.featured.showOnList ? (
				<Link link={ item.link } >
					<FeaturedMedia id={ item.featured_media }/>
				</Link>
			) : null }
			<Excerpt dangerouslySetInnerHTML={ { __html: item.excerpt.rendered } }/>
			
		</article>
		<div className="entry-footer">
			<Author authorId={ item.author }/>
			<PostedOn post={ item }/>
			<Categories cats={ item.categories.slice( 0, 2 ) }/>
			<Tags tags={ item.tags.slice( 0, 2 ) }/>
		</div>
	</>
);

export default connect( Item );

const Title = styled.h1`
	color: #111;
	margin: calc( 3 * 1rem ) 0 1rem !important;
`;

const Excerpt = styled.div`
  line-height: 1.8;
  color: #111;
  margin: 0;
  overflow: hidden;

  & p {
	  margin: 32px 0;
  }

  @media only screen and ( min-width: 768px ) {
	  max-width: calc(8 * ( 100vw / 12 ) - 28px );
  }
  
  @media only screen and ( min-width: 1168px ) {
	  max-width: calc( 6 * ( 100vw / 12) - 28px );
  }
`;
