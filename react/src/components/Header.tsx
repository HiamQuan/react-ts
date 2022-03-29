import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <div>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container className="my-1">
                <Navbar.Brand href='/' >HiamCoder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Production</Nav.Link>
                            <Nav.Link href="/blogs">Blogs</Nav.Link>
                            <Nav.Link href="/admin">Dashboard</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
