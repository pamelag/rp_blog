// @flow

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from './actionCreators';
import Posts from './Posts';

class Home extends React.Component {
    props: {
    getAPIData: Function,
    posts: Array<Post>
  };
  componentDidMount() {
    console.log(this.props.getAPIData()); // eslint-disable-line no-console
  };
  render() {
    return (
      <main className="container left-container">
        <div className="row">
          <section className="sidebar col-lg-5 col-12" style={{backgroundImage: 'url(../public/img/sidebar.jpg)', left: 0}}>
              <span className="bar"/>
              <span className="bar"/>
              <span className="bar"/>
              <div className="site-info">
                <div className="primary-info">
                    <h1>Writer</h1>
                    <p>A minimal blogging theme to put your content on show. <a href="post.html">Look at the features.</a> </p>
                    <p>Content is king</p>
                </div>
                <div className="secondary-info">
                    <p>
                    <Link to="/addPost" className="btn btn-primary" >New post</Link>
                    </p>
                </div>
              </div>
            </section>
            <Posts posts={this.props.posts} />
        </div>
    </main>
    );
  }
}

const mapStateToProps = (state) => {
  const posts = state.apiData;
  console.log("mapStateToProps ", posts); // eslint-disable-line no-console
  return posts;
}

const mapDispatchToProps = ( dispatch: Function ) => ({
  getAPIData() {
    console.log("mapDispatchToProps"); // eslint-disable-line no-console
    dispatch(getPosts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
