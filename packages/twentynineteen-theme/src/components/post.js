import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import Header from "./header";
import PostFeaturedMedia from "./post-featured-media";
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
  
  const headerFeaturedImageClass = ( data.isReady && state.theme.featured.showOnPost && post.featured_media ) ? 'has-featured-image' : 'empty-featured-image';

  return (
    <>
    <div className={headerFeaturedImageClass}>
      <Header />
        {data.isPost ? (
          <div className="site-featured-image">
            {state.theme.featured.showOnPost && (
              <PostFeaturedMedia id={post.featured_media} />
            )}
            <div className="entry-header">
              <Title className="entry-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              {/* Author And Date */}
              <EntryMeta className="entry-footer">
                <StyledLink link={author.link}>
                  <Author className="byline">
                    <AuthorIcon /><span>{author.name}</span>
                  </Author>
                </StyledLink>
                <Fecha className="posted-on">
                  {' '}
                  <DateIcon /><span>{date.toDateString()}</span>
                </Fecha>
              </EntryMeta>
            </div>
            
          </div>
        ) : null}
      
      
    </div>
    
    {data.isReady ? (
    <Section id="primary" className="content-area hfeed">
		<article className="entry">
			<Body className="entry-content">
				<libraries.html2react.Component html={post.content.rendered} />
			</Body>
		</article>
    </Section>
  ) : null }
  </>);
};

export default connect(Post);

const Section = styled.div`
  margin: 0;
`;

const EntryMeta = styled.div`
	margin-bottom: 1rem !important;

  @media (min-width: 768px) {
      margin-bottom: 0 !important;
  }
`;

const Title = styled.h1``;

const StyledLink = styled(Link)`
  padding: 15px 0;
  margin-right: 16px;
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
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 32px 0;
    border-left: 2px solid #0073aa;
    padding: 0 0 0 1em;
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
