import React, { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import History from "../utils/History";
import { AppContext } from "../theme/AppProvider";
import data from "../utils/data.json";

const Header = () => {
  const handleClick = (e) => {
    History.push(e.target.attributes.getNamedItem("data-redirect").value);
  };

  const { toggleTheme, themeMode } = useContext(AppContext);
  const handleThemeChange = (e) => {
    console.log(e);
    toggleTheme();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="px-3">
        <Navbar.Brand onClick={(e) => handleClick(e)} data-redirect="/">
          {data.website.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link button onClick={(e) => handleThemeChange(e)}>
              <i className={`fa fa-${themeMode === "darkTheme" ? "sun-o" : "moon-o"}`}></i>
            </Nav.Link>
            <Nav.Link onClick={(e) => handleClick(e)} data-redirect="/contact">
              Contact
            </Nav.Link>
            <Nav.Link onClick={(e) => handleClick(e)} data-redirect="/user-list">
              Users
            </Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item>View</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
