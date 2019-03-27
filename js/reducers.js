// @flow

import { combineReducers } from 'redux';
import { ADD_API_DATA } from './actions';


const apiData = (state = {}, action: Action) => {
  console.log("reducers apiData", action.type); // eslint-disable-line no-console
  if(action.type === ADD_API_DATA) {
    return Object.assign({}, state, action.payload)
  }
  return state;
} 

const rootReducer = combineReducers({apiData});

export default rootReducer;
