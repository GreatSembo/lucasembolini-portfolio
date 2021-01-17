import React, { useEffect, useRef, Component } from "react";

import './App.css';
import SideBar from './components/layout/sidebar'
import Home from './pages/home'
import About from './pages/about'
import Skills from "./pages/skills"
import ContactMe from "./pages/contactMe"
import { Route, Switch } from "wouter";

export default class App extends Component {

  render() {
    return (
      <Switch>
        <Route path={process.env.PUBLIC_URL } component={Home}/>
        <Route path={process.env.PUBLIC_URL + "/skills"} component={Skills}/>
        <Route path={process.env.PUBLIC_URL + "/contact"} component={ContactMe}/>
        <Route path={process.env.PUBLIC_URL + "/about"} component={About}/>
        <Route>404, Not Found!</Route>
      </Switch>
    );
  }
}

// export default App;
