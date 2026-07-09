import * as React from "react"
import Button from "react-bootstrap/cjs/Button.js"
import OverlayTrigger from "react-bootstrap/cjs/OverlayTrigger.js"
import Tooltip from "react-bootstrap/cjs/Tooltip.js"
import type { Placement } from "react-bootstrap/cjs/types"

type HintProps = {
  description: string
  variant: string
  placement: Placement
}

export const Hint = ({ description, variant, placement }: HintProps) => {
  const renderTooltip = (props: Record<string, unknown>) => (
    <Tooltip {...props}>{description}</Tooltip>
  )

  return (
    <OverlayTrigger
      placement={placement}
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button className="button-xxs ms-5px" variant={variant}>
        ?
      </Button>
    </OverlayTrigger>
  )
}
