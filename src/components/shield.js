import React from "react"
import PropTypes from "prop-types"

export const Shield = ({ src }) => (
  <img
    className="mb-3 mr-3 mr-lg-0"
    src={src}
    alt={src.replace(".svg", "").replace(/\//g, " ")}
  />
)

Shield.propTypes = {
  src: PropTypes.string.isRequired,
}
