import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Loading from "./loading";
import globalStyles from '../global-style';

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
	    <Global styles={globalStyles} />
      <HeadContainer>
        <Header />
      </HeadContainer>
      <Body>
        {data.isFetching && <Loading />}
        {data.isArchive && <List />}
        {data.isPostType && <Post />}
        {data.is404 && <Page404 />}
      </Body>
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div``;

const Body = styled.div``;
