import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

import {
    Badge,
    Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,
  } from "react-bootstrap";
function Header( ) {
  return (
    <Navbar bg='dark' variant='dark'> 
        <Container >
            <Navbar.Brand>
            <a href='/'>Shopping cart</a>
            </Navbar.Brand>             
            <Navbar.Text className='search'>
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
            />
                </Navbar.Text>    
                <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
            
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              
            </Dropdown.Menu>
            </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
  
}

export default Header 