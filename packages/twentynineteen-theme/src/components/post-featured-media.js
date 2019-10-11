import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const PostFeaturedMedia = ({ state, id }) => {
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

  return (
    <StyledImage
      alt={media.title.rendered}
      src={media.source_url}
      srcSet={srcset}
    />
  );
};

export default connect(PostFeaturedMedia);

const StyledImage = styled(Image)`
  height: 100%;
  left: 0;
  max-width: 1000%;
  min-height: 100%;
  min-width: 100vw;
  position: absolute;
  width: 100%;
  z-index: 1;
  object-fit: cover;
  top: 0;
  filter: grayscale(100%);
`;
