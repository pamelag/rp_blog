// @flow
import React from 'react';
import PostItem from './PostItem';

class Posts extends React.Component {
        
    render() {
        
        const posts = this.props["posts"];
        console.log("Posts ", posts); // eslint-disable-line no-console
        //console.log("Posts props", props); // eslint-disable-line no-console
        if(typeof posts != "undefined" && posts != null) {
            return (
                <section className="col-lg-7 col-12 ml-auto main-content">
                  <div className="sub-nav">
                      <a href={null} className="select-posts active">Posts</a>
                  </div>
                  <div className="home-page-posts animated fadeIn ">
                    
                      {posts.map(post => <PostItem key={post.id} {...post} post={post}/>)}
                  </div>
                </section>
            )
        } else {
            return (
                <section className="col-lg-7 col-12 ml-auto main-content">
                  <div className="sub-nav">
                      <a href={null} className="select-posts active">Posts</a>
                  </div>
                  <div className="home-page-posts animated fadeIn ">
                    
                      
                  </div>
                </section>
            )
        }

        
        
    }
}    

export default Posts;
