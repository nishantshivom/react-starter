import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router, Switch, Route, NavLink, Redirect,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/dashboard';


class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav>
              <div className="">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="menu">
                  <NavLink activeClassName="active" exact to="/">Home</NavLink>
                  <NavLink activeClassName="active" exact to="/page2">Page 2</NavLink>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <Switch>
              <Route path="/page2" component={Dashboard} />
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/404" render={() => <h1>Not Found !</h1>} />
              <Route render={() => <Redirect to="/404" />} />
            </Switch>

          </main>
          <footer />
        </div>
      </Router>
    );
  }
}

export default App;
