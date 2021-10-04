
import React from 'react';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './pages/about';
import { Articles } from './pages/articles';
import { Contact } from './pages/contact';
import { Home } from './pages/home';

function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
