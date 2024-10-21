import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar style={{background: "white",}}>
        <Container >
          <Navbar.Brand href="/Landing">
          <i className="fa-solid fa-address-book fa-flip fa-2xl" style={{color: "red",}} />
            {' '}
            Contact Manager
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
