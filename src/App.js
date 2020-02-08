import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import Projects from './components/Projects';
import Interests from './components/Interests';
import Home from './components/Home';
//import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Connor Hanify</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Interests">Interests</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Thoughs">Thoughts</NavLink>
                </NavItem>
              </Nav>
          </Navbar>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/interests" component={Interests}/>
        </div>
      </Router>
    );
  }
}


export default App;
