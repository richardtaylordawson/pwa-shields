import React from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import "./../styles/global.css"
import { Navigation, GlobalTheme } from "../components"

export const Main = ({ children, currentPage }) => (
  <>
    <GlobalTheme />
    <header>
      <Navigation currentPage={currentPage} />
    </header>
    <main>{children}</main>
  </>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
  currentPage: PropTypes.string.isRequired,
}
