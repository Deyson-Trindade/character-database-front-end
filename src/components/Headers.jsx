import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  
  const NavBar = () => {

    
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/" style={{ padding: '15px', color: 'white' }}>Gaveta de Personagem</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav >
              <NavItem>
                <NavLink href="/components/" style={{ color: 'white' }}>Casdastrar novo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" style={{ color: 'white' }}>Listar</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;