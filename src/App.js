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
import About from './About';
import Topics from './components/Topics';

// const App = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>
//
//       <hr/>
//
//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )

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
                  {/* <Link to="/about">About</Link> */}
                </NavItem>
                <NavItem>
                  <NavLink href="/projects">
                    Projects
                  </NavLink>
                </NavItem>
              </Nav>
          </Navbar>

          {/* <Route exact path="/" component={Home}/> */}
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
        </div>
      </Router>
    );
  }
}


export default App;
