import React, { Fragment } from "react"
import { Tooltip, Button } from "shards-react"

export class CertifiedTooltip extends React.Component {
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
        <Button className="xs-button" id="certifiedTooltip" outline theme="secondary">?</Button>
        <Tooltip
          open={this.state.open}
          target="#certifiedTooltip"
          toggle={this.toggle}
          placement="right"
        >
          Please note that the use of the word "certified" was just another way of saying your application is a PWA. It does not mean it is certified by PWA Shields or another application.
        </Tooltip>
      </Fragment>
    )
  }
}
