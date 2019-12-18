import React from "react"
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
        <NavbarBrand href="/"><img className="m-0" src="/site/logo.svg" alt="pwa shields logo" /></NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/" active={this.activePage === "series"}>Series</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/create" active={this.activePage === "create"}>Create</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
