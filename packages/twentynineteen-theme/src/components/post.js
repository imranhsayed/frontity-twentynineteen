import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import List from "./list";
import Header from "./header";
import PostFeaturedMedia from "./post-featured-media";
import Author from "./entry-meta/author";
import PostedOn from "./entry-meta/posted-on";
import Categories from "./entry-meta/categories";
import Tags from "./entry-meta/tags";


const Post = ( { state, actions, libraries } ) => {
  // Get info of current post.
  const data = state.source.get(state.router.link);
  // Get the the post.
  const post = state.source[data.type][data.id];

  // Prefetch home posts and the list component.
  useEffect( () => {
    actions.source.fetch("/");
    List.preload();
  }, [] );
  
  const headerFeaturedImageClass = ( data.isReady && state.theme.featured.showOnPost && post.featured_media ) ? 'has-featured-image' : 'empty-featured-image';
  
  return (
    <>
    <div className={ headerFeaturedImageClass }>
      <Header/>
        { data.isReady ? (
          <div className="site-featured-image">
            { state.theme.featured.showOnPost ? (
              <PostFeaturedMedia id={ post.featured_media }/>
            ) : null }
            <div className="entry-header">
              <Title className="entry-title" dangerouslySetInnerHTML={ { __html: post.title.rendered } }/>
              { data.isPost ? (
                <EntryMeta className="entry-meta">
                  <Author authorId={ post.author }/>
                  <PostedOn post={ post }/>
                </EntryMeta>
              ) : null }
            </div>
          </div>
        ) : null }
      
      
    </div>
    
    { data.isReady ? (
    <Section id="primary" className="content-area hfeed">
      <article className="entry">
        <Body className="entry-content">
          <libraries.html2react.Component html={ post.content.rendered }/>
          { data.isPost ? (
            <EntryFooter className="entry-footer">
                <Author authorId={ post.author }/>
                <PostedOn post={ post }/>
                <Categories cats={ post.categories }/>
                <Tags tags={ post.tags }/>
            </EntryFooter>
          ) : null }
        </Body>
      </article>
    </Section>
  ) : null }
  </>);
};

export default connect( Post );

const Section = styled.div`
  margin: 0;
`;

const EntryMeta = styled.div`
  margin-bottom: 1rem !important;
  color: #767676;

  & .svg-icon{
      margin-right: 0.5em;
  }

  @media ( min-width: 768px ) {
      margin-bottom: 0 !important;
  }
`;

const EntryFooter = styled.footer`
	margin-bottom: 1rem !important;
  color: #767676;

  & .svg-icon{
      margin-right: 0.5em;
  }

  @media ( min-width: 768px ) {
      margin-bottom: 0 !important;
  }
`;

const Title = styled.h1``;

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
    /* Next line overrides an inline style of the figure element. */
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

  @media ( min-width: 420px ) {
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
