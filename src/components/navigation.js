import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  Button,
} from "shards-react"

export const Navigation = ({ currentPage }) => {
  const getInstalledStatus = () => {
    console.log("in installed status")
    if (typeof document !== "undefined") {
      console.log(document.querySelector("pwa-install").getInstalledStatus())
      return document.querySelector("pwa-install").getInstalledStatus()
    } else {
      console.log("in the false")
      return false
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("install", () => {
      console.log("installed!")
    })
  }

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [showInstallBtn, setShowInstallBtn] = useState(getInstalledStatus())

  return (
    <Navbar sticky="top" type="dark" theme="secondary" expand="md">
      <Link to="/" className="navbar-brand">
        <img className="m-0" src="/images/logo.svg" alt="pwa shields logo" />
      </Link>

      <NavbarToggler
        onClick={() => setNavbarOpen(prevState => !prevState)}
        aria-label="mobile navigation"
      />

      <Collapse open={navbarOpen} navbar>
        <Nav navbar className="d-flex justify-content-between w-100">
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
              <Button
                outline
                theme="white"
                size="sm"
                className={showInstallBtn && "d-none"}
                onClick={() => {
                  if (typeof document !== "undefined") {
                    document.querySelector("pwa-install").openPrompt()
                  }
                }}
              >
                Install +
              </Button>
              <pwa-install
                usecustom
                iconpath="https://www.pwa-shields.com/images/favicon.svg"
                manifestpath="/manifest.webmanifest"
              ></pwa-install>
            </NavItem>
          </div>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
}
