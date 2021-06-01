import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import animesReducer from './reducers/animesReducer'
import thunk from 'redux-thunk'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(animesReducer, compose( applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

