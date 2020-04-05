import React, { useState, useEffect } from "react"
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
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [showInstallBtn, setShowInstallBtn] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      const isSupportingBrowser = window.hasOwnProperty(
        "BeforeInstallPromptEvent"
      )

      const isStandalone =
        navigator.standalone || matchMedia("(display-mode: standalone)").matches

      const isIOS = !!(
        navigator.userAgent.includes("iPhone") ||
        navigator.userAgent.includes("iPad") ||
        (navigator.userAgent.includes("Macintosh") &&
          navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2)
      )

      console.log("isSupportingBrowser", isSupportingBrowser)
      console.log("isStandalone", isStandalone)
      console.log("isIOS", isIOS)
      console.log(
        "showInstallBtn",
        !isStandalone && (isSupportingBrowser || isIOS)
      )

      setShowInstallBtn(!isStandalone && (isSupportingBrowser || isIOS))
    }
  }, [])

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
                className={!showInstallBtn ? "d-none" : ""}
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
