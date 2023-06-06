import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../user/UserSlice";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import logo from "../../Assets/logo.JPG";

export const Header = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleOnLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser({}));
        toast.success("user logged Out");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            style={{ width: "63px", height: "60px", borderRadius: "30px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?.uid ? (
              <>
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>

                <Link to="#" className="nav-link" onClick={handleOnLogout}>
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
