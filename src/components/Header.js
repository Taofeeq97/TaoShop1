import React from 'react'
import {
    Container,
    Nav, 
    Navbar, 
} from 'react-bootstrap';



const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" className="bg-body-tertiary" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">TaoShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            <Nav.Link href="/"><i className='fas fa-user'></i>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
