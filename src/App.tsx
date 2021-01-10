import React, { useEffect, useRef, Component } from "react";

import './App.css';
import SideBar from './components/layout/sidebar'
import Home from './pages/home'
import Skills from "./pages/skills"
import ContactMe from "./pages/contactMe"
import { Route, Switch } from "wouter";

export default class App extends Component {

  render() {
    return (
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/contact" component={ContactMe}/>
        <Route>404, Not Found!</Route>
      </Switch>
    );
  }
}

// export default App;
