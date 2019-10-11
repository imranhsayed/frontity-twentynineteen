import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import List from "./list";
import Header from "./header";
import PostFeaturedMedia from "./post-featured-media";
import Author from "./entry-meta/author";
import PostedOn from "./entry-meta/posted-on";
import Categories from "./entry-meta/categories";
import Tags from "./entry-meta/tags";

const PostHeader = ({ post }) => (
  <PostTitle>
    <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
    {post.type === "post" ? (
      <EntryMeta>
        <Author authorId={post.author} />
        <PostedOn post={post} />
      </EntryMeta>
    ) : null}
  </PostTitle>
);

const Post = ({ state, actions, libraries }) => {
  // Get info of current post.
  const data = state.source.get(state.router.link);
  // Get the the post.
  const post = state.source[data.type][data.id];

  // Get the Html2React component.
  const Html2React = libraries.html2react.Component;

  // Prefetch home posts and the list component.
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  if (!data.isReady) return null;

  return (
    <>
      {state.theme.featured.showOnPost ? (
        <HasFeaturedImage>
          <Header />
          <SiteFeaturedImage>
            <PostFeaturedMedia id={post.featured_media} />
          </SiteFeaturedImage>
          <PostHeader post={post} />
        </HasFeaturedImage>
      ) : (
        <>
          <Header />
          <PostHeader post={post} />
        </>
      )}

      <Section id="primary">
        <Article>
          <Html2React html={post.content.rendered} />
          {data.isPost ? (
            <EntryFooter>
              <Author authorId={post.author} />
              <PostedOn post={post} />
              <Categories cats={post.categories} />
              <Tags tags={post.tags} />
            </EntryFooter>
          ) : null}
        </Article>
      </Section>
    </>
  );
};

export default connect(Post);

const Section = styled.div`
  margin: 0;
  margin-top: calc(0.5rem);
`;

const EntryMeta = styled.div`
  margin-bottom: 1rem !important;
  color: ${({ theme }) =>
    theme.featured.showOnPost ? "white" : "rgb(118, 118, 118)"};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  & .svg-icon {
    margin-right: 0.5em;
  }

  @media (min-width: 768px) {
    margin-bottom: 0 !important;
  }
`;

const EntryFooter = styled.footer`
  margin-bottom: 1rem !important;
  color: rgb(118, 118, 118);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  & .svg-icon {
    margin-right: 0.5em;
  }

  & a {
    text-decoration: none;
  }

  & a:hover {
    color: ${({ theme }) => theme.color};
  }

  @media (min-width: 768px) {
    margin-bottom: 0 !important;
  }
`;

const Title = styled.h1`
  &::before {
    content: " ";
    display: block;
    height: 2px;
    width: 1em;
    margin: 0px;
  }
`;

const Article = styled.article`
  max-width: calc(100% - 2rem);
  margin: 0px 1rem;
  overflow: hidden;
  font-family: "Hoefler Text", "Baskerville Old Face", Garamond,
    "Times New Roman", serif;

  @media only screen and (min-width: 768px) {
    max-width: 80%;
    margin: 0px 10%;
    padding: 0px 60px;
  }

  p {
    line-height: 39.6px;
  }

  @media only screen and (min-width: 768px) {
    p {
      max-width: calc(66.6667vw - 28px);
    }
  }

  figure {
    margin: 24px auto;
    /* Next line overrides an inline style of the figure element. */
    width: 100%;

    figcaption {
      display: block !important;
      font-size: 0.71111em;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      margin: 0;
      padding: 0.5rem;
      text-align: center;
      caption-side: bottom;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 32px 0;
    border-left: 2px solid ${({ theme }) => theme.color};
    padding: 0 0 0 1em;
  }

  pre {
    background-color: #888888;
    padding: 25px;
    border-radius: 2px;
    font-size: 0.811111em;
    font-family: "Courier 10 Pitch", Courier, monospace;
    line-height: 1.8;
    overflow: auto;
  }

  code {
    font-size: 1.125em;
    white-space: pre-wrap;
    word-break: break-word;
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    transition: color 110ms ease-in-out;
    color: ${({ theme }) => theme.color};
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

  & .wp-block-image img {
    width: auto;
    display: block;
    max-width: 100%;
  }

  /*Gallery*/

  & .gallery {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: calc(1.5 * 1rem);
  }

  & .gallery-item {
    display: inline-block;
    margin-right: 16px;
    margin-bottom: 16px;
    text-align: center;
    vertical-align: top;
    width: 100%;
  }

  & .gallery-columns-2 .gallery-item {
    max-width: calc((100% - 16px * 1) / 2);
  }

  & .gallery-columns-2 .gallery-item:nth-of-type(2n + 2) {
    margin-right: 0;
  }

  & .gallery-columns-3 .gallery-item {
    max-width: calc((100% - 16px * 2) / 3);
  }

  & .gallery-columns-3 .gallery-item:nth-of-type(3n + 3) {
    margin-right: 0;
  }

  & .gallery-columns-4 .gallery-item {
    max-width: calc((100% - 16px * 3) / 4);
  }

  & .gallery-columns-4 .gallery-item:nth-of-type(4n + 4) {
    margin-right: 0;
  }

  & .gallery-columns-5 .gallery-item {
    max-width: calc((100% - 16px * 4) / 5);
  }

  & .gallery-columns-5 .gallery-item:nth-of-type(5n + 5) {
    margin-right: 0;
  }

  & .gallery-columns-6 .gallery-item {
    max-width: calc((100% - 16px * 5) / 6);
  }

  & .gallery-columns-6 .gallery-item:nth-of-type(6n + 6) {
    margin-right: 0;
  }

  & .gallery-columns-7 .gallery-item {
    max-width: calc((100% - 16px * 6) / 7);
  }

  & .gallery-columns-7 .gallery-item:nth-of-type(7n + 7) {
    margin-right: 0;
  }

  & .gallery-columns-8 .gallery-item {
    max-width: calc((100% - 16px * 7) / 8);
  }

  & .gallery-columns-8 .gallery-item:nth-of-type(8n + 8) {
    margin-right: 0;
  }

  & .gallery-columns-9 .gallery-item {
    max-width: calc((100% - 16px * 8) / 9);
  }

  & .gallery-columns-9 .gallery-item:nth-of-type(9n + 9) {
    margin-right: 0;
  }

  & .gallery-item:last-of-type {
    padding-right: 0;
  }

  & .gallery-caption {
    display: block;
    font-size: 0.71111em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0.5rem;
  }

  & .gallery-item > div > a {
    display: block;
    line-height: 0;
    box-shadow: 0 0 0 0 transparent;
  }

  & .gallery-item > div > a:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color};
  }

  /*Captions*/

  & .wp-caption {
    margin-bottom: calc(1.5 * 1rem);
  }

  @media only screen and (min-width: 768px) {
    & .wp-caption.aligncenter {
      position: relative;
      left: calc(calc(8 * (100vw / 12) - 28px) / 2);
      transform: translateX(-50%);
    }
  }

  @media only screen and (min-width: 1168px) {
    & .wp-caption.aligncenter {
      left: calc(calc(6 * (100vw / 12) - 28px) / 2);
    }
  }

  & .wp-caption img[class*="wp-image-"] {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  & .wp-caption-text {
    color: #767676;
    font-size: 0.71111em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0.5rem;
    text-align: center;
  }

  .wp-block-columns {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 782px) {
    .wp-block-columns {
      flex-wrap: nowrap;
    }
  }

  .wp-block-column {
    flex-grow: 1;
    margin-bottom: 1em;
    flex-basis: 100%;
    min-width: 0;
    word-break: break-word;
    overflow-wrap: break-word;
  }
  @media (min-width: 600px) {
    .wp-block-column {
      flex-basis: calc(50% - 16px);
      flex-grow: 0;
    }
    .wp-block-column:nth-child(even) {
      margin-left: 32px;
    }
  }
  @media (min-width: 782px) {
    .wp-block-column:not(:first-child) {
      margin-left: 32px;
    }
  }

  .wp-block-text-columns {
    display: flex;
  }
  .wp-block-text-columns.aligncenter {
    display: flex;
  }
  .wp-block-text-columns .wp-block-column {
    margin: 0 16px;
    padding: 0;
  }
  .wp-block-text-columns .wp-block-column:first-child {
    margin-left: 0;
  }
  .wp-block-text-columns .wp-block-column:last-child {
    margin-right: 0;
  }
  .wp-block-text-columns.columns-2 .wp-block-column {
    width: calc(100% / 2);
  }
  .wp-block-text-columns.columns-3 .wp-block-column {
    width: calc(100% / 3);
  }
  .wp-block-text-columns.columns-4 .wp-block-column {
    width: calc(100% / 4);
  }

  .wp-block-table.has-fixed-layout {
    table-layout: fixed;
    width: 100%;
  }

  .wp-block-table.alignleft,
  .wp-block-table.aligncenter,
  .wp-block-table.alignright {
    display: table;
    width: auto;
  }

  .wp-block-table.has-subtle-light-gray-background-color {
    background-color: #f3f4f5;
  }

  .wp-block-table.has-subtle-pale-green-background-color {
    background-color: #e9fbe5;
  }

  .wp-block-table.has-subtle-pale-blue-background-color {
    background-color: #e7f5fe;
  }

  .wp-block-table.has-subtle-pale-pink-background-color {
    background-color: #fcf0ef;
  }

  .wp-block-table.is-style-stripes {
    border-spacing: 0;
    border-collapse: inherit;
    background-color: transparent;
    border-bottom: 1px solid #f3f4f5;
  }
  .wp-block-table.is-style-stripes tr:nth-child(odd) {
    background-color: #f3f4f5;
  }
  .wp-block-table.is-style-stripes.has-subtle-light-gray-background-color
    tr:nth-child(odd) {
    background-color: #f3f4f5;
  }
  .wp-block-table.is-style-stripes.has-subtle-pale-green-background-color
    tr:nth-child(odd) {
    background-color: #e9fbe5;
  }
  .wp-block-table.is-style-stripes.has-subtle-pale-blue-background-color
    tr:nth-child(odd) {
    background-color: #e7f5fe;
  }
  .wp-block-table.is-style-stripes.has-subtle-pale-pink-background-color
    tr:nth-child(odd) {
    background-color: #fcf0ef;
  }
  .wp-block-table.is-style-stripes td {
    border-color: transparent;
  }
`;

const PostTitle = styled.div`
  position: relative;
  z-index: 9;
  margin: calc(3rem) 1rem 1rem;
  display: block;

  @media only screen and (min-width: 768px) {
    margin: calc(3rem) calc(10% + 60px) 0px;
  }
`;

const HasFeaturedImage = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 1px 2px;
  color: rgb(255, 255, 255);
  background-size: cover;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  line-height: 2.6875em;

  & header {
    z-index: 9;
    line-height: 1.525em;
  }

  & a {
    color: white !important;
  }

  @media only screen and (min-width: 768px) {
    min-height: 100vh;
    margin-bottom: 1rem;
    padding-bottom: 3rem;
  }

  h1,
  p {
    color: white;
  }
`;

const SiteFeaturedImage = styled.div`
  &::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    content: " ";
    pointer-events: none;
    mix-blend-mode: multiply;
    opacity: 0.8;
    z-index: 3;
    background: ${({ theme }) => theme.color};
  }

  &::before {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    content: " ";
    pointer-events: none;
    mix-blend-mode: multiply;
    opacity: 0.5;
    z-index: 3;
    background: ${({ theme }) => theme.color};
  }
`;
