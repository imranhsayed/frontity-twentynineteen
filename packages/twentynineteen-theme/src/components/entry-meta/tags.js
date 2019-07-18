import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import TagIcon from "../icons/tag-icon";

const Tags = ( { state, tags } ) => (
    <>
        { tags.length > 0 ? (
            <Wrapper className="tags-links">
                <TagIcon/>
                { tags.map( ( tagId, index ) => {
                    const isLast = !!( tags.length === index + 1 );
                    const tag = state.source.tag[tagId];
                    return (
                        <span key={ tagId }>
                            <Link link={ tag.link } >{ tag.name }</Link>
                            { !isLast && (', ') }
                        </span>
                    );
                } ) }
            </Wrapper>
        )  : null }
    </>
);

export default connect( Tags );

const Wrapper = styled.span`
	display: inline;
	margin-right: 16px;
	
	& a {
	    font-weight: 500;
	}
`;


