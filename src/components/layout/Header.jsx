import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">Budget-Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?.uid ? (
              <>
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
                <Link to="/profile" className="nav-link">
                  Profile{" "}
                </Link>
                <Link to="/" className="nav-link">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/register" className="nav-link">
                  Register{" "}
                </Link>
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
