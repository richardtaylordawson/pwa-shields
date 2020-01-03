import React from "react"
import { Link } from "gatsby"
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from "shards-react"

export class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = { collapseOpen: false }
    this.activePage = props.currentPage
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    })
  }

  render() {
    return (
      <Navbar sticky="top" type="dark" theme="secondary" expand="md">
        <Link to="/" className="navbar-brand"><img className="m-0" src="/images/logo.svg" alt="pwa shields logo" /></Link>
        <NavbarToggler onClick={this.toggleNavbar} aria-label="mobile navigation" />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" className="nav-link" activeClassName={this.activePage === "home" && "active"}>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/series" className="nav-link" activeClassName={this.activePage === "series" && "active"}>Series</Link>
            </NavItem>
            <NavItem>
              <Link to="/create" className="nav-link" activeClassName={this.activePage === "create" && "active"}>Create</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
