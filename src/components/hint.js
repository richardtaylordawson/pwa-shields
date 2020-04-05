import React, { useState, Fragment } from "react"
import PropTypes from "prop-types"
import { Tooltip, Button } from "shards-react"

export const Hint = ({ id, description, theme, placement }) => {
  const [hintOpen, setHintOpen] = useState(false)

  return (
    <Fragment>
      <Button
        id={id}
        outline
        onClick={(e) => e.preventDefault}
        className="button-xxs ml-5px"
        theme={theme}
      >
        ?
      </Button>
      <Tooltip
        open={hintOpen}
        target={`#${id}`}
        toggle={() => setHintOpen((prevState) => !prevState)}
        placement={placement}
      >
        {description}
      </Tooltip>
    </Fragment>
  )
}

Hint.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
}
