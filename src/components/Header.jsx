import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import FormCharacter from '../pages/character/Form'
import GetList from '../pages/character/List'
import Home from '../pages/home/Home'
import Alterar from '../pages/character/Update'

const NavBar = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Router>
        <Navbar color="dark" light expand="md">
          <NavbarBrand ><Link to="/" style={{ padding: '15px', color: 'white', textDecoration: 'none' }} >Gaveta de Personagem</Link></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav >
              <NavItem>
                <NavLink><Link 
                  to="/cadastrar" 
                  style={{ color: 'white', textDecoration: 'none' }}>Casdastrar novo</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/listar" style={{ color: 'white', textDecoration: 'none' }}>Listar</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/alterar" style={{ color: 'white', textDecoration: 'none' }}>Alterar</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route path="/cadastrar">
            <FormCharacter />
          </Route>
          <Route path="/listar">
            <GetList />
          </Route>
          <Route path="/alterar">
            <Alterar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default NavBar;