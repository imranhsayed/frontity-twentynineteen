import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import PreviousIcon from "../icons/previous-icon";
import NextIcon from "../icons/next-icon";

const Pagination = ( { state, actions, libraries } ) => {

	const { totalPages }        = state.source.get( state.router.link );
	const { path, page, query } = libraries.source.parse( state.router.link );

	const isThereNextPage     = page < totalPages;
	const isTherePreviousPage = page > 1;

	/**
	 * Get the required page link.
	 *
	 * @param {int} pageNo Page No.
	 * @return {string} Post permalink.
	 */
	const getPageLink = ( pageNo ) => {
		return libraries.source.stringify({
			path,
			page: pageNo,
			query
		});
	};

	/**
	 * Create pagination array.
	 *
	 * Example: [1, "...", 521, 522, 523, 524, 525, "...", 529]
	 *
	 * @param {int} currentPage Current page no.
	 * @param {int} totalPages Count of total no of pages.
	 * @return {Array} Array containing the indexes to be looped through to create pagination
	 */
	const createPaginationArray = ( currentPage, totalPages ) => {

		let loopableArray = [] ;
		let countOfDotItems = 0;

		// If there is only one page, return an empty array.
		if ( 1 === totalPages ) {
			return loopableArray
		}

		/**
		 * Push the two inde items before the current page.
		 */
		if ( 0 < ( currentPage - 2 ) ) {
			loopableArray.push( ( currentPage - 2 ) );
		}

		if ( 0 < ( currentPage - 1 ) ) {
			loopableArray.push( ( currentPage - 1 ) );
		}

		// Push the current page index item.
		loopableArray.push( currentPage );

		/**
		 * Push the two index items after the current page.
		 */
		if ( totalPages >= ( currentPage + 1 ) ) {
			loopableArray.push( ( currentPage + 1 ) );
		}

		if ( totalPages >= ( currentPage + 2 ) ) {
			loopableArray.push( ( currentPage + 2 ) );
		}

		/**
		 * Push the '...' at the beginning of the array
		 * only if the difference of between the 1st and 2nd index item is greater than 1.
		 */
		if ( 1 < (loopableArray[0] - 1 )  ) {
			loopableArray.unshift( '...' );
			countOfDotItems += 1;
		}

		/**
		 * Push the '...' at the end of the array.
		 * only if the difference of between the last and 2nd last item is greater than 1.
		 * We remove the count of dot items from the array to get the actual indexes, while checking the condition.
		 */
		if ( 1 < ( totalPages - loopableArray[ loopableArray.length - ( 2 - countOfDotItems ) ] )  ) {
			loopableArray.push( '...' );
		}

		// Push first index item in the array if it does not already exists.
		if ( -1 === loopableArray.indexOf( 1 ) ) {
			loopableArray.unshift( 1 );
		}


		// Push last index item in the array if it does not already exists.
		if ( -1 === loopableArray.indexOf( totalPages ) ) {
			loopableArray.push( totalPages );
		}

		return loopableArray;

	};

	const paginationArray = createPaginationArray( page, totalPages );

	/**
	 * Fetch the next page if it hasn't been fetched yet.
	 */
	useEffect( () => {
		if ( isThereNextPage ) actions.source.fetch( getPageLink( page + 1 ) );
	}, [] );


	return (
		<PaginationContainer className="tn-pagination">
			{ isTherePreviousPage && (
				<Link className="pagination-links prev" link={ getPageLink( page - 1 ) }>
					<PreviousIcon />
					<span className="nav-prev-text">Newer posts</span>
				</Link>
			) }

			<>
				{ paginationArray && paginationArray.map( ( item, index ) => {

					// If item is not equal to '...' and the item value is not equal to current page.
					if ( ( '...' !== item ) && ( item !== page ) ) {
						return (
							<React.Fragment key={ `${ item }-${index}` }>
								<Link className="page-numbers" link={ getPageLink( item ) }>
									<Text>{ item }</Text>
								</Link>
							</React.Fragment>
						)
					} else {
						return (
							<span key={ `${ item }-${index}` } className={ `${ '...' !== item ? 'current' : 'dots' } page-numbers` }>
								<Text>{ item }</Text>
							</span>
						)
					}
				} ) }
			</>

			{ isThereNextPage && (
				<Link className="pagination-links next" link={ getPageLink( page + 1 ) }>
					<span className="nav-next-text">Older posts</span>
					<NextIcon />
				</Link>
			) }
		</PaginationContainer>
	);
};

export default connect( Pagination );

const PaginationContainer = styled.div`

	padding: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-weight: 700;
	font-size: 0.88889em;
    letter-spacing: -0.02em;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

const Text = styled.span`
  display: inline-block;
`;
