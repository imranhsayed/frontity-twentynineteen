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
				<Link link={ item.link }>
					<Title className="entry-title" dangerouslySetInnerHTML={ { __html: item.title.rendered } }/>
				</Link>
				{ state.theme.featured.showOnList && (
					<FeaturedMedia id={ item.featured_media }/>
				) }
				<Excerpt dangerouslySetInnerHTML={ { __html: item.excerpt.rendered } }/>
			</article>
			{/*Author And Date*/ }
			<div className="entry-footer">
				<StyledLink link={ author.link }>
					<Author className="byline">
						<AuthorIcon/><span>{ author.name }</span>
					</Author>
				</StyledLink>
				<Fecha className="posted-on">
					{ ' ' }
					<DateIcon/><span>{ date.toDateString() }</span>
				</Fecha>
			</div>
		</>
	);
};

export default connect( Item );

const Title = styled.h1`
	color: #111;
`;

const Author = styled.span`
	
	margin-right: 16px;
	
	& span {
	font-weight: 500;
	}
`;

const StyledLink = styled( Link )`
  padding: 15px 0;
`;

const Fecha = styled.span`
`;

const Excerpt = styled.div`
  line-height: 39.6px;
  color: #111;
`;
