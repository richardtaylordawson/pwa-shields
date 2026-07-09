import * as React from "react"

type ShieldProps = {
  src: string
}

export const Shield = ({ src }: ShieldProps) => (
  <img
    className="mb-3 me-3 me-lg-0"
    src={src}
    alt={src.replace(".svg", "").replace(/\//g, " ")}
  />
)
