import React from "react"
import { Tooltip, Button, OverlayTrigger } from "react-bootstrap"

export const Hint = ({ description, variant, placement }) => {
  const renderTooltip = (props) => <Tooltip {...props}>{description}</Tooltip>

  return (
    <OverlayTrigger
      placement={placement}
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button className="button-xxs ml-5px" variant={variant}>
        ?
      </Button>
    </OverlayTrigger>
  )
}
