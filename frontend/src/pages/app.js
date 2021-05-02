import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './home'
import withAuth from './with_auth'
import login from './login'
import register from './register'
import template from './template'
import portfolio from './portfolio'

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/template" exact component={withAuth(template)} />
            <Route path="/portfolio/:username" exact component={portfolio} />
            <Route path="/login" component={login} />
            <Route path="/register" component={register} />
          </Switch>
      </Router>
  );
}

export default App;