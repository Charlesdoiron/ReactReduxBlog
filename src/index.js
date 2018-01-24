import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise'

import PostsIndex from './components/PostsIndex'
import PostsShow from './components/PostsShow'


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Route path="/" component={PostsIndex}/>
    		<Route path="/posts/:id" component={PostsShow}/>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
