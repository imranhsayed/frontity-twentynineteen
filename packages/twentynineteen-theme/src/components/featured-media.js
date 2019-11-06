import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMedia = ({ state, id }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map(item => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  const calculatedImageRatio =
    (media.media_details.height * 100) / media.media_details.width;

  return (
    <Container imageRatio={calculatedImageRatio}>
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
    </Container>
  );
};

export default connect(FeaturedMedia);

const Container = styled.div`
  margin: 1rem 0;
  overflow: hidden;
  position: relative;
  display: flex;
  padding-top: ${({ imageRatio }) => imageRatio}%;

  &::before,
  &::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: "\\020";
    pointer-events: none;
    background: ${({ theme }) => theme.color};
    mix-blend-mode: screen;
    opacity: 0.1;
    z-index: 2;
  }

  &::after {
    mix-blend-mode: multiply;
    opacity: 1;
    z-index: 3;
  }
`;

const StyledImage = styled(Image)`
  height: auto;
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
