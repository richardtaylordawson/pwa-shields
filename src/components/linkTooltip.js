import React, { Fragment } from "react"
import { Tooltip, Button } from "shards-react"

export class LinkTooltip extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { open: false }
  }

  toggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <Fragment>
        <Button onClick={e => e.preventDefault} className="xxs-button" id="linkTooltip" outline theme="secondary">?</Button>
        <Tooltip
          open={this.state.open}
          target="#linkTooltip"
          toggle={this.toggle}
          placement="right"
        >
          This will allow your shield to act as a link to an external site.
        </Tooltip>
      </Fragment>
    )
  }
}
