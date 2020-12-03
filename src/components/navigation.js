import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavItem, Button } from "react-bootstrap"

export const Navigation = ({ currentPage }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [showInstallBtn, setShowInstallBtn] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      const isIOS =
        navigator.userAgent.includes("iPhone") ||
        navigator.userAgent.includes("iPad") ||
        (navigator.userAgent.includes("Macintosh") &&
          typeof navigator.maxTouchPoints === "number" &&
          navigator.maxTouchPoints > 2)

      const isSupportingBrowser = window.hasOwnProperty(
        "BeforeInstallPromptEvent"
      )

      setShowInstallBtn(
        (isIOS && isSupportingBrowser) ||
          (localStorage.getItem("pwaShieldsInstalled") !== "" &&
            localStorage.getItem("pwaShieldsInstalled") !== "false")
      )

      // This will only be called if the browser is eligible and PWA has NOT been installed yet
      window.addEventListener("beforeinstallprompt", () => {
        localStorage.setItem("pwaShieldsInstalled", "false")
        setShowInstallBtn(true)
      })

      window.addEventListener("appinstalled", () => {
        localStorage.setItem("pwaShieldsInstalled", "true")
      })
    }
  }, [])

  let installButton

  if (showInstallBtn) {
    installButton = (
      <Button
        variant="outline-light"
        size="sm"
        onClick={() => {
          if (typeof document !== "undefined") {
            document.querySelector("pwa-install").openPrompt()
          }
        }}
      >
        Install +
      </Button>
    )
  }

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
              {installButton}
              <pwa-install
                usecustom
                iconpath="https://www.pwa-shields.com/images/favicon.svg"
                manifestpath="/manifest.webmanifest"
              ></pwa-install>
            </NavItem>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
