import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
//import axiosMiddleware from 'redux-axios';
import countries from './data/countries';
import newCountry from './data/country';
console.log(newCountry);

const defaultState = {
  countries,
  newCountry,
  user:{
  	name:"Niraj Maharjan",
  	username:"jumper 001"
  }
};

const middleware = applyMiddleware(
    thunk
)

const store = createStore(rootReducer, defaultState, middleware);

// we export history because we need it in `reduxstagram.js` to feed into <Router>
export const history = syncHistoryWithStore(browserHistory, store);

export default store;