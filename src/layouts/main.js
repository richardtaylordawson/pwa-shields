import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./../styles/global.css"
import { Navigation } from "./../components"

if (typeof window !== "undefined") {
  // Only including when window is defined because otherwise it fails the build
  require("@pwabuilder/pwainstall")
}

export const Main = ({ children, currentPage }) => (
  <>
    <header>
      <Navigation currentPage={currentPage} />
    </header>
    <main>{children}</main>
  </>
)
