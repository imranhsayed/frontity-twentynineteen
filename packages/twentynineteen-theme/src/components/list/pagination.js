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

	const renderPagination = ( totalPages ) => {

		let content = '';
		let pagination = [];

		for ( let i = 0; i < totalPages; i++ ) {
			content = <Text>{ i + 1 }</Text>;
			pagination.push( content );
		}

		return pagination;
	};

	const pagination = renderPagination( totalPages );

	// Fetch the next page if it hasn't been fetched yet.
	useEffect( () => {
		if ( isThereNextPage ) actions.source.fetch( getPageLink( page + 1 ) );
	}, [] );

	return (
		<PaginationContainer className="tn-pagination">
			{ isTherePreviousPage && (
				<Link className="pagination-links" link={ getPageLink( page - 1 ) }>
					<Text><PreviousIcon/> Newer posts</Text>
				</Link>
			) }

			<>
				{ pagination && pagination.map( ( item, index ) => {
					const pageNo = index + 1;
					return (
						( page != pageNo ) ? (
							<Link key={ `${ index }-pagination` } className="page-numbers" link={ getPageLink( index + 1 ) }>
								{ item }
							</Link>
						) : (
							<span key={ `${ index }-pagination` } className="page-numbers current">
								{ item }
							</span>
						)
					)
				} )
				}
			</>

			{ isThereNextPage && (
				<Link className="pagination-links" link={ getPageLink( page + 1 ) }>
					<Text> Older posts <NextIcon/></Text>
				</Link>
			) }
		</PaginationContainer>
	);
};

export default connect( Pagination );

const NavLinkSeparator = styled.span`
	padding: 1rem;
`;

const PaginationContainer = styled.div`

    margin: calc(3 * 1rem) calc(10% + 60px) calc(1rem / 2);
	& .pagination-links {
		display: inline-block;
	    margin-left: 0 !important;
	    font-size: 0.88889em;
	    color: #0073aa;
	    transition: color 110ms ease-in-out;
	    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	    font-weight: 700;
	    letter-spacing: -0.02em;
	    line-height: 1.2;
	    -webkit-font-smoothing: antialiased;
	}

		span {
			padding: 0;
		}
	}
`;

const Text = styled.span`
  display: inline-block;
  margin-top: 16px;
`;
