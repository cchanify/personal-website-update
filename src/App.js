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
import Links from './components/Links';
import Home from './components/Home';
import Crypto from './components/Crypto';
// import Thoughts from './components/Thoughts';
//import Books from './components/Books';
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
                  <NavLink href="/Links">Links</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/Crypto">Crypto</NavLink>
                </NavItem>

                {/* <NavItem>
                  <NavLink href="/Books">Books</NavLink>
                </NavItem> */}
                {/* <NavItem>
                  <NavLink href="/Thoughts">Thoughts</NavLink>
                </NavItem> */}

              </Nav>
          </Navbar>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/links" component={Links}/>
          <Route path="/Crypto" component={Crypto}/>
          {/* <Route path="/books" component={Books}/> */}
          {/* <Route path="/Thoughts" component={Thoughts}/> */}
        </div>
      </Router>
    );
  }
}


export default App;
