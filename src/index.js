import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Header from './components/Header'
import FormCharacter from './pages/character/Form'
import List from './pages/character//List'
import Update from './pages/character/Update'
import Created from './pages/character/Created'

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/cadastrar">
        <FormCharacter />
      </Route>
      <Route path="/listar">
        <List />
      </Route>
      <Route path="/created">
        <Created />
      </Route>
      <Route path="/alterar">
        <Update />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

