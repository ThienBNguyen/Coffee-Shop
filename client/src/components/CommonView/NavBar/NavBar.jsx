import React,{useEffect} from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { signout, isAuthenticated } from "../../auth";
import { itemTotal } from "../../MenuView/SubMenuView/cartHelpers";
import "./style.scss";

function NavBar() {
  // const [load, setLoad] = useState(false);
  
  const itemNum = () =>{
    return (
    <small className="cart-badge">{itemTotal()}</small>
)}
  return (
    <Navbar
      bg="black"
      expand="lg"
      variant="dark"
      className="ftco-navbar-light"
      fixed="top"
    >
      <Navbar.Brand href="/">
        TH <small>Coffee</small>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <NavLink
            exact="true"
            to="/home"
            className="nav-link"
            activeClassName="link-active"
          >
            Home
          </NavLink>
          <NavLink
            to="/Menu"
            className="nav-link"
            activeClassName="link-active"
          >
            Menu
          </NavLink>
          <NavLink
            to="/Service"
            className="nav-link"
            activeClassName="link-active"
          >
            Service
          </NavLink>
          <NavLink
            to="/Blog"
            className="nav-link"
            activeClassName="link-active"
          >
            Blog
          </NavLink>
          <NavLink
            to="/About"
            className="nav-link"
            activeClassName="link-active"
          >
            About
          </NavLink>
          <NavLink className="nav-link" to="/Contact">
            Contact
          </NavLink>

          <NavLink className="nav-link" to="/Cart">
            <ShoppingCartIcon />
            {itemNum()}
          </NavLink>
        </Nav>
        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <NavLink className="nav-item pr-3" to="user/dashboard" 
          activeClassName="link-active"

          className="nav-link"
          >
            user Dashboard
          </NavLink>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <NavLink className="nav-item pr-3" to="admin/dashboard"
          activeClassName="link-active"

          className="nav-link"
          >
            admin Dashboard
          </NavLink>
        )}
        {!isAuthenticated() && (
          <Nav>
            <NavLink className="nav-link pr-3"
            activeClassName="link-active"
            to="/register">
              register
            </NavLink>
            <NavLink  className="nav-link"
            activeClassName="link-active"
            to="/login">
              Log In
            </NavLink>
          </Nav>
        )}
        {isAuthenticated() && (
          <Nav>
            <NavLink
               className="nav-link"
              to="/home"
              onClick={() =>
                signout(() => {

                  window.location.reload(false);
                })
              }
            >
              logout
            </NavLink>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
