import React, { useState, useEffect } from "react"
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
      const pwaInstallButton = document.getElementById("pwaInstallButton");
      if (pwaInstallButton) {
        pwaInstallButton.style.display = "none";

        window.addEventListener("beforeinstallprompt", (event) => {
          pwaInstallButton.style.display = "block";
        });

        window.addEventListener("appinstalled", (event) => {
          pwaInstallButton.style.display = "none";
        });
      }
    }
  }, [])

  return (
    <Navbar sticky="top" type="dark" theme="secondary" expand="md">
      <Link to="/" className="navbar-brand">
        <img className="m-0" src="/images/logo.svg" alt="pwa shields logo" />
      </Link>

      <NavbarToggler
        onClick={() => setNavbarOpen((prevState) => !prevState)}
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
