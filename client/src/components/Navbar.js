import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action3">Services</Nav.Link>
            <Nav.Link href="#action4">Process</Nav.Link>
            <Nav.Link href="Contact Us">Contact US</Nav.Link>
          </Nav>
          <Form>
          <NavDropdown className='' title="LogIn" id="navbarScrollingDropdown" style={{marginRight: "160px", color: "green", fontWeight: "bold"}}>
              {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item> */}
              <NavDropdown.Item href="login" style={{color: "green"}}>Login</NavDropdown.Item>
              <NavDropdown.Item style={{color: "green"}}>My Account</NavDropdown.Item>
              <NavDropdown.Item href="dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="myservice">My Service</NavDropdown.Item>
              <NavDropdown.Item href="rewards">My Rewards</NavDropdown.Item>
              <NavDropdown.Item href="preference">My Preference</NavDropdown.Item>
              <NavDropdown.Item href="logout" style={{color: "green"}}>Logout</NavDropdown.Item>
            </NavDropdown>
            {/* <Button href="Register" variant="outline-success" className='mx-2'>Register</Button> */}
            {/* <Button href="login" variant="outline-success">Login</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavScroll;