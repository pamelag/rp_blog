// @flow

import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import type { RouterHistory } from 'react-router-dom';
import { object } from 'prop-types';
import { setSearchTerm } from './actionCreators';

class Landing extends React.Component {
  static contextTypes = {
    history: object
  };
  props: {
    history: RouterHistory
  };
  goToSearch = event => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
      <main className="container left-container">
        <div className="row">
            <section className="sidebar col-lg-5 col-12" style={{backgroundImage: 'url(../public/img/sidebar.jpg)', left: 0}}>
            {/* <span className="menu-trigger animated fadeInDown"/> */}
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
                    <a className="btn btn-primary">Join Our Newsletter</a>
                  </p>
              </div>
            </div>
            </section>
            <section className="col-lg-7 col-12 ml-auto main-content">
              <div className="sub-nav">
                  <a href={null} className="select-posts active">Posts</a>
                  <a href={null} className="select-categories">Categories</a>
              </div>
              <div className="home-page-posts animated fadeIn ">
                  <article className="post">
                    <div className="post-preview col-10  no-gutter">
                        <h2><a href="post.html">Reinforcement Learning</a></h2>
                        <p>It was a cold December morning, as I sat out on my porch I decided today was the day. </p>
                        <p className="meta">
                          <a href="author.html">James Reddy</a> in <a href="category.html">Storytime</a> <i className="link-spacer"/> <i className="fa fa-bookmark"/> 23 minute read
                        </p>
                    </div>
                    <div className=" col-2  no-gutter">
                        <img src="../public/img/profile-1.jpg" className="user-icon" alt="user-profile"/>
                    </div>
                  </article>

                  <article className="post">
                    <div className="post-preview col-10  no-gutter">
                        <h2><a href="post.html">Building, Hacking, Creating</a></h2>
                        <p>Is it better to start from scratch or build on someone elses work. My thoughts. </p>
                        <p className="meta">
                          <a href="author.html">Mad Hacker in Easy Living </a> in <a href="category.html">Storytime</a> <i className="link-spacer"/> <i className="fa fa-bookmark"/> 9 minute read
                        </p>
                    </div>
                    <div className=" col-2  no-gutter">
                        <img src="../public/img/profile-2.jpg" className="user-icon" alt="user-profile"/>
                    </div>
                  </article>

                  
                  <article className="post">
                    <div className="post-preview col-10  no-gutter">
                        <h2><a href="post.html">Ten reasons why you should travel, or why the city is killing your inner creative</a></h2>
                        <p>About time for your next adventure.</p>
                        <p className="meta">
                          <a href="author.html">Sarah Smith in Adventure  </a> in <a href="category.html">Storytime</a> <i className="link-spacer"/> <i className="fa fa-bookmark"/> 9 minute read
                        </p>
                    </div>
                    <div className=" col-2  no-gutter">
                        <img src="../public/img/profile-3.jpg" className="user-icon" alt="user-profile"/>
                    </div>
                  </article>
              </div>
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
