import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import DateIcon from "../icons/date-icon";

const PostedOn = ( { state, post } ) => {

    const date = new Date( post.date );
    
    return (
        <Wrapper className="posted-on">
            <DateIcon/>
            <Link link={ post.link }>{ date.toDateString() }</Link>
        </Wrapper>
    );
};

export default connect( PostedOn );

const Wrapper = styled.span`
	display: inline;
	margin-right: 16px;
	
	& a {
	    font-weight: 500;
	}
`;


