import React, { useState, useEffect } from "react";
import { debounce } from './functions';
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMedia = ( { state, id } ) => {


	const media = state.source.attachment[id];

	if ( !media ) return null;

	const [ imgHeight, setImageHeight ] = useState( null );

	/**
	 * Get required image height prior to image render.
	 *
	 * @param {boolean} setHeightInState If setHeightInState is true then set the new image height in state ( imgHeight )
	 *
	 * @return {number} calculatedImgHeight Required Image Height.
	 */
	const calculateImgHeight = ( setHeightInState = false ) => {

		const windowWidth = window.innerWidth;
		const postThumbnail = media.media_details;
		let containerMargin = 0;

		if ( 768 < window.innerWidth ) {
			containerMargin = 2 * ( ( 0.10 * windowWidth ) + 60 );
		} else {
			containerMargin = 44;
		}

		const containerWidth = windowWidth - containerMargin;

		const calculatedImgHeight = containerWidth * ( postThumbnail.height / postThumbnail.width );

		// Set image height in state.
		if ( setHeightInState ) {
			setImageHeight( calculatedImgHeight );
		}

		return calculatedImgHeight;
	};

	const requiredImgHeight = calculateImgHeight();

	// If state has imgHeight value available ( not null ) use that else use it from requiredImgHeight.
	const imageStyle = ( null === imgHeight ) ? { height: `${ requiredImgHeight }px` } : { height: `${ imgHeight }px` };


	/**
	 * Set image size on resize.
	 *
	 * On window resize calculate the required image height and set it in state
	 *
	 * @return {void}
	 */
	useEffect( () => {

		// Calculate the image size on window resize and set it in state.
		const calculateImgHeightDebounced = debounce( () => calculateImgHeight( true ), 50 );

		window.addEventListener( 'resize', calculateImgHeightDebounced );

		return () => {
			window.removeEventListener( 'resize', calculateImgHeightDebounced )
		}

	}, [] );


	const srcset =
		      Object.values( media.media_details.sizes )
		      // Get the url and width of each size.
			      .map( item => [ item.source_url, item.width ] )
			      // Recude them to a string with the format required by `srcset`.
			      .reduce(
				      ( final, current, index, array ) =>
					      final.concat(
						      `${ current.join(" ")}w${ index !== array.length - 1 ? ", " : ""}`
					      ),
				      ""
			      ) || null;

	return (
		<div className="ftn-featured-img-container" style={ imageStyle }>
			<StyledImage
				alt={ media.title.rendered }
				src={ media.source_url }
				srcSet={ srcset }
			/>
		</div>
	);
};

export default connect( FeaturedMedia );


const StyledImage = styled( Image )`
  
  width: 100%;
  object-fit: cover; 
 
`;

