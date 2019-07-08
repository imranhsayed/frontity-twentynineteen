import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import AuthorIcon from "./icons/author-icon";
import DateIcon from "./icons/date-icon";

const Post = ({ state, actions, libraries }) => {
  // Get info of current post.
  const data = state.source.get(state.router.link);
  // Get the the post.
  const post = state.source[data.type][data.id];
  // Get the author.
  const author = state.source.author[post.author];
  // Get a date for humans.
  const date = new Date(post.date);

  // Prefetch home posts and the list component.
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  return data.isReady ? (
    <Section id="primary" className="content-area hfeed">
		<article className="entry">
			<div className="entry-header">
				<Title className="entry-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
			</div>
			{data.isPost && (
				// Author And Date.
				<EntryFooter className="entry-footer hee">
					<StyledLink link={ author.link }>
						<Author className="byline">
							<AuthorIcon/><span>{ author.name }</span>
						</Author>
					</StyledLink>
					<Fecha className="posted-on">
						{ ' ' }
						<DateIcon/><span>{ date.toDateString() }</span>
					</Fecha>
				</EntryFooter>
			)}
			{state.theme.featured.showOnPost && (
				<FeaturedMedia id={post.featured_media} />
			)}
			<Body className="entry-content">
				<libraries.html2react.Component html={post.content.rendered} />
			</Body>
		</article>
    </Section>
  ) : null;
};

export default connect(Post);

const Section = styled.div`
  margin: 0;
`;

const EntryFooter = styled.div`
	margin-bottom: 0 !important;
`;

const Title = styled.h1``;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Author = styled.p`
  display: inline;
`;

const Fecha = styled.p`
  display: inline;
`;

const Body = styled.div`

  * {
    max-width: 100%;
  }

  p {
    line-height: 39.6px;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    transition: color 110ms ease-in-out;
    color: #0073aa;
    text-decoration: underline;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
