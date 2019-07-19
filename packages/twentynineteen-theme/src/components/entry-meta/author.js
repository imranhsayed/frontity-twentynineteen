import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import AuthorIcon from "../icons/author-icon";

const Author = ( { state, authorId } ) => {

    const author = state.source.author[authorId];

    return (
        <Wrapper className="byline">
            <AuthorIcon/>
            <Link link={ author.link }>{ author.name }</Link>
        </Wrapper>
    );
};

export default connect( Author );

const Wrapper = styled.span`
	display: inline;
	margin-right: 16px;
	
	& a {
	    font-weight: 500;
	}
`;


