import React from "react"

export const Shield = ({ src }) => (
  <img
    className="mb-3 mr-3 mr-lg-0"
    src={src}
    alt={src.replace(".svg", "").replace(/\//g, " ")}
  />
)
