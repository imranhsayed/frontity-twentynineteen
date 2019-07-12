import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import AuthorIcon from "../icons/author-icon";
import DateIcon from "../icons/date-icon";

const Item = ( { state, item } ) => {
	const author = state.source.author[ item.author ];
	const date   = new Date( item.date );

	return (
		<>
			<article className="entry-header">
				<Title className="entry-title"  >
					<Link link={item.link} ><span dangerouslySetInnerHTML={{ __html: item.title.rendered }} /></Link>
				</Title>
				{ state.theme.featured.showOnList && (
					<FeaturedMedia id={ item.featured_media }/>
				) }
				<Excerpt dangerouslySetInnerHTML={ { __html: item.excerpt.rendered } }/>
				
			</article>
			{/*Author And Date*/ }
			<div className="entry-footer">
				
				<Author className="byline">
					<AuthorIcon/>
					<Link link={ author.link } >{ author.name }</Link>
				</Author>
				
				<Fecha className="posted-on">
					{ ' ' }
					<DateIcon />
					<Link link={item.link} >{date.toDateString()}</Link>
				</Fecha>
			</div>
		</>
	);
};

export default connect( Item );

const Title = styled.h1`
	color: #111;
	margin: calc(3 * 1rem) 0 1rem !important;
`;

const Author = styled.span`
	display: inline;
	margin-right: 16px;
	
	& a {
	font-weight: 500;
	}
`;

const Fecha = styled.span`
`;

const Excerpt = styled.div`
  line-height: 1.8;
  color: #111;
  margin: 0;
  overflow: hidden;

  & p {
	  margin: 32px 0;
  }

  @media only screen and (min-width: 768px) {
	  max-width: calc(8 * (100vw / 12) - 28px);
  }
  
  @media only screen and (min-width: 1168px) {
	  max-width: calc(6 * (100vw / 12) - 28px);
  }
`;
