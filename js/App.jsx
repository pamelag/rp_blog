// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import type { Match } from 'react-router-dom';
import AsyncRoute from './AsyncRoute';
import store from './store';
import preload from '../data.json';
import Post from "./Post";

const App = () => (
  <Provider store={store}>
    <div>
      <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={import('./Home')} />} />
   
      <Route exact path="/addPost" component={props => <AsyncRoute props={props} loadingPromise={import('./AddPost')} />} />

      <Route exact path="/login" component={props => <AsyncRoute props={props} loadingPromise={import('./Login')} />} />

      
      <Route
        path="/post/:id"
        component={(props: { match: Match }) => {
          const selectedPost = preload.posts.find((post: Post) => props.match.params.id === post.id);
          return (
            <AsyncRoute
              loadingPromise={import('./Post')}
              props={Object.assign({ post: selectedPost, match: {} }, props)}
            />
          );
        }}
      />

      <Route
        path="/search"
        component={props => (
          <AsyncRoute loadingPromise={import('./Search')} props={Object.assign({ shows: preload.shows }, props)} />
        )}
      />
      <Route
        path="/details/:id"
        component={(props: { match: Match }) => {
          const selectedShow = preload.shows.find((show: Show) => props.match.params.id === show.imdbID);
          return (
            <AsyncRoute
              loadingPromise={import('./Details')}
              props={Object.assign({ show: selectedShow, match: {} }, props)}
            />
          );
        }}
      />
    </div>
  </Provider>
);

export default App;
