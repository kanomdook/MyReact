import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home'
import About from './components/about/About'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  const userProfile = {
    name: 'Dahyun'
  };
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr></hr>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About userProfile={userProfile} />
          </Route>
          <Route path="/dashboard">
            <Dashboard userProfile={userProfile} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
