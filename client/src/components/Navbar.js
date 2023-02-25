import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import { CAvatar } from '@coreui/react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function NavScroll() {
  return (
    <>
    <Navbar expand="lg" className='fixed-top' style={{backgroundColor: "#EFF9F0"}}>
      <Container fluid>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            style={{ maxHeight: '1000px' }}
            // navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/service">Services</Nav.Link>
            <Nav.Link href="/process">Process</Nav.Link>
            <Nav.Link href="/contactus">Contact US</Nav.Link>
          </Nav>
          <Form>
            <DropdownButton
            id="dropdown-variants-Success"
            variant="success"
            title="LogIn"
            style={{marginRight: "160px", color: "green", fontWeight: "bold"}}
          >
            <Dropdown.Item href='login' className='darken-10 fw-bold'>LogIn</Dropdown.Item>
            <Dropdown.Item className='darken-10 fw-bold'>My Account</Dropdown.Item>
            <Dropdown.Item href="Dashboard">DashBoard</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="logout" className='darken-10 fw-bold'>Logout</Dropdown.Item>
          </DropdownButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavScroll;