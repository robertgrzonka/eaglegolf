import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import styled from 'styled-components'

const StyledNav = styled(Nav)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const TripLink = styled(Link)`
  color: black;
`

const Dropdown = styled(NavDropdown)`
  a {
    display: block;
    text-align: center;
    margin: 5px;
  }
`

const BrandLink = styled(Link)`
  font-size: 20px;
`

const Navigation: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <BrandLink href="/">Eagle Golf 🦅</BrandLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <StyledNav>
            <Dropdown title="Trips" id="collasible-nav-dropdown">
              <TripLink href="/trips#1">Trip 1</TripLink>
              <TripLink href="/trips#2">Trip 2</TripLink>
              <NavDropdown.Divider />
              <TripLink href="/trips">All trips</TripLink>
            </Dropdown>
            <Link href="/about" style={{ marginRight: 10 }}>
              About us
            </Link>
            <Link href="/gallery">Gallery</Link>
          </StyledNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
