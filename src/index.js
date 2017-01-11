import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import 'babel-polyfill';

/*
  Import Components
*/
import App from './components/App';
import Content from './components/Content';
import PineTree from './components/PineTree';

/* Import our data store */
import store, { history } from './store';

/*
  Rendering
  This is where we hook up the Store with our actual component and the router
*/
render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history <Route path="/view/:postId" component={Single}></Route> */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Content} />
        <Route path="/pineTree" component={PineTree}></Route>
        <Route path="/react-redux-demo-app.github.io" component={Content}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);