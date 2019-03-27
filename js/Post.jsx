// @flow

import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { object } from 'prop-types';
import { setSearchTerm } from './actionCreators';

class Post extends React.Component {
  static contextTypes = {
    history: object
  };
  props: {
    history: RouterHistory,
    post: Post
  };
  goToSearch = event => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
        <main className="container">
            <div className="row">
                <div className="col-xs-12 single-content">
                    <p className="meta">
		            <a className="" href="category.html">{this.props.post.author}</a> in <a className="" href="category.html">Storytime</a> <i className="link-spacer"/> <i className="fa fa-bookmark" /> {this.props.post.storyTime}
	                </p>
                    <h1>{this.props.post.title}</h1>
                    <p>
                      {this.props.post.summary}
                    </p>
                </div>
            </div>
        </main>        
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
