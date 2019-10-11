import React from "react";
import { connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Loading from "./loading";
import Footer from "./footer";
import Global from "./global";
import { ThemeProvider } from "emotion-theming";

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <ThemeProvider theme={state.theme}>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
      <Global />
      <Container>
        {!data.isPostType && <Header />}
        <main>
          {data.isFetching && <Loading />}
          {data.isArchive && <List />}
          {data.isPostType && <Post />}
          {data.is404 && <Page404 />}
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default connect(Theme);

const Container = styled.div`
  min-height: 100vh;
`;
