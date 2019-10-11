import React from "react";
import { connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Loading from "./loading";
import Footer from "./footer";
import Global from "./global";

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
      <Global />
      {!data.isPostType && (
        <HeadContainer>
          <Header />
        </HeadContainer>
      )}
      <Body id="content">
        {data.isFetching && <Loading />}
        {data.isArchive && <List />}
        {data.isPostType && <Post />}
        {data.is404 && <Page404 />}
      </Body>
      <Footer />
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div``;

const Body = styled.div``;
