import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import NotFound from './NotFound';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
        <Navigation/>
          <Switch>
            <Route to="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;