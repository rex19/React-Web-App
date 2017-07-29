import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import App from './components/app/index.js'
import Hello from './components/hello/index.js'
import Login from './components/login/index.js'



const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Hello} />

      <Route path="index">
          <Route path="aaa" component={Hello}/>
          <Route path="bbb" component={Login}/>
          <Route path="ccc" component={Hello}/>
      </Route>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('app'))