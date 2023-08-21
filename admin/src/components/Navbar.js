import React, { useContext } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link,  } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import NavbarImage from "../assets/logo.png";

function NavBar() {
  const { user, logoutUser } = useContext(AuthContext);

  // const Admin = user?.isAdmin;

  return (
    <>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand className="ms-lg-4 ms-2 text-center">
          {/* <img
            alt=""
            src={NavbarImage}
            className="img-responsive"
            style={{ maxWidth: "100%", height: "auto" }}
          /> */}
          Mahewa
        </Navbar.Brand>
      </Navbar>

      {/* Second Navbar */}
      <Navbar expand="lg" style={{ backgroundColor: "#1651B6" }}>
        <Navbar.Toggle aria-controls="second-navbar-nav" />
        <Navbar.Collapse id="second-navbar-nav">
          <Nav className="ms-lg-4 ms-2 text-center">
            <Nav.Link as={Link} to="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            {/* {Admin && ( */}
            <Nav.Link as={Link} to="/users" style={{ color: "white" }}>
              Users
            </Nav.Link>
            {/* )} */}
          </Nav>
          <Nav className="text-center">
            <div className="ml-auto">
              
              {user ? (
                <NavDropdown
                  align="end"
                  title={user?.EmployeeName}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/login"
                    onClick={() => logoutUser()}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Nav.Link
                    as={Link}
                    to="/login"
                    className="link-light text-decoration-none"
                  >
                    Login
                  </Nav.Link>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
