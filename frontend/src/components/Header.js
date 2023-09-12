import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button , Badge} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from "react-router-bootstrap";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"
import { useLogoutMutation } from '../slices/usersApiSlice';
import {logout} from "../slices/authSlice";

const Header = () => {
  const {cartItems} = useSelector((state) => state.cart);
  const {userInfo} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation()
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
    dispatch(logout());
    navigate("/login")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand >Smashed</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to="/">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/merch">
            <Nav.Link>Merch</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
            <Nav.Link >About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
           {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>
                    Profile
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Log out</NavDropdown.Item>
              </NavDropdown>
           ) : (
                <LinkContainer to="/login">
                <Button className="btn-block" type="button"><FaUser /> Sign In </Button>
                </LinkContainer>
           )}
            

            <LinkContainer to="/cart">
            <Button className="btn-block ms-2" type="button"><FaShoppingCart /> Cart {
              cartItems.length > 0 && <Badge pill bg="success" style={{
                marginLeft:"5px"
              }}>
               {cartItems.reduce((a, c) => a + c.qty, 0)}
              </Badge>
            } </Button>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
