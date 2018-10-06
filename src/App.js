import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Projects from './components/Projects';
import About from './components/About';
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
              </Nav>
          </Navbar>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={Home}/>
          <Route path="/projects" component={Projects}/>
        </div>
      </Router>
    );
  }
}


export default App;
