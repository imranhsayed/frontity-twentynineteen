import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import CategoryIcon from "../icons/category-icon";

const Categories = ( { state, cats } ) => (
    <>
    { cats.length > 0 ? (
        <Wrapper className="cat-links">
            <CategoryIcon/>
            { cats.map( ( catId, index ) => {
                const isLast = !!( cats.length === index + 1 );
                const cat = state.source.category[catId];
                return (
                    <span key={ catId }>
                        <Link link={ cat.link }>{ cat.name }</Link>
                        { !isLast && (', ') }
                    </span>
                );
            } ) }
        </Wrapper>
    ) : null }
    </>
);

export default connect( Categories );

const Wrapper = styled.span`
	display: inline;
	margin-right: 16px;
	
	& a {
	    font-weight: 500;
	}
`;


