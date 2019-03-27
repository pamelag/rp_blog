// @flow

import axios from 'axios';
import { ADD_API_DATA } from './actions';

export function addAPIData (apiData: {posts: Array<Post>}) {
  console.log("apiData", apiData); // eslint-disable-line no-console
  return { type: ADD_API_DATA, payload: apiData};
}

export function getPosts(){
  return (dispatch: Function) => {
    axios
    .get('http://localhost:3002/posts')
    .then(response => {
        console.log("inside actioncreators getPosts"); // eslint-disable-line no-console
        dispatch(addAPIData(response.data))
     }).catch(error => {
       console.error('axios error', error); // eslint-disable-line no-console
     })
  };
}
