import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import{ createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReduxPromise from "redux-promise";
import { devToolsEnhancer } from 'redux-devtools-extension';
import './app.scss';

import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, devToolsEnhancer())}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={ PostsNew } />
          <Route path="/posts/:id" component={ PostsShow } />
          <Route path="/" component={ PostIndex } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
