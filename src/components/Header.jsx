import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';


const NavBar = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand ><Link to="/" style={{ padding: '15px', color: 'white', textDecoration: 'none' }} >Gaveta de Personagem</Link></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav >
              <NavItem>
                <Link 
                  to="/cadastrar" 
                  style={{ color: 'white', textDecoration: 'none' }}>Casdastrar novo</Link>
              </NavItem>
              <NavItem>
                <Link to="/listar" style={{ color: 'white', textDecoration: 'none' }}>Listar</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  );
}

export default NavBar;