import React, { useState } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import { InstallButton } from "./installButton"

export const Navigation = ({ currentPage }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Link to="/" className="navbar-brand">
        <img className="m-0" src="/images/logo.svg" alt="pwa shields logo" />
      </Link>

      <Navbar.Toggle
        onClick={() => setNavbarOpen((prevState) => !prevState)}
        aria-label="mobile navigation"
      />

      <Navbar.Collapse open={navbarOpen}>
        <Nav className="d-flex justify-content-between w-100">
          <div className="d-flex flex-column flex-md-row">
            <NavItem>
              <Link
                to="/"
                className={`nav-link ${currentPage === "home" && "active"}`}
              >
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/series"
                className={`nav-link ${currentPage === "series" && "active"}`}
              >
                Series
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/create"
                className={`nav-link ${currentPage === "create" && "active"}`}
              >
                Create
              </Link>
            </NavItem>
          </div>
          <div className="d-flex align-items-center">
            <NavItem className="p-md-2 pt-2">
              <InstallButton />
            </NavItem>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
