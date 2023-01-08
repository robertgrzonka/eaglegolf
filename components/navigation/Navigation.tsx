import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">Eagle Golf</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <NavDropdown title="Trips" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/trips#1">Trip 1</NavDropdown.Item>
              <NavDropdown.Item href="/trips#2">Trip 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/trips">All trips</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
