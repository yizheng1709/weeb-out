import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import animesReducer from './reducers/animesReducer'
import thunk from 'redux-thunk'

const store = createStore(animesReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)