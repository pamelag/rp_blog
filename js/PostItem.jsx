// @flow

import React from 'react';
import {string} from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    border: 1px solid #ffffff;
`;

const PostItem = props => (
    <Wrapper>
        <article className="post">
            <div className="post-preview col-10  no-gutter">
                <h2><Link to={`/Post/${props.id}`}>{props.title}</Link></h2>
                <p>{props.summary} </p>
                <p className="meta">
                <a href="author.html">{props.author}</a> in <a href="category.html">Storytime</a> <i className="link-spacer"/> <i className="fa fa-bookmark"/> {props.storyTime}
                </p>
            </div>
            <div className=" col-2  no-gutter">
                <img src="../public/img/profile-1.jpg" className="user-icon" alt="user-profile"/>
            </div>
        </article>
    </Wrapper>
)

PostItem.propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    summary: string.isRequired,
    author: string.isRequired,
    storyTime: string.isRequired
}

export default PostItem;
