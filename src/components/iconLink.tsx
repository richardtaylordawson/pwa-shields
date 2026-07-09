import * as React from "react"
import type { ReactNode } from "react"
import Button from "react-bootstrap/cjs/Button.js"

export const IconLink = ({
  image,
  heading,
  description,
  link,
  linkText,
}: {
  image: ReactNode
  heading: string
  description: string
  link: string
  linkText: string
}) => (
  <>
    <div>
      {image}
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>

    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button variant="outline-secondary" className="w-100">
        {linkText}
      </Button>
    </a>
  </>
)
