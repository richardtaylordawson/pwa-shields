import React from "react"
import Img from "gatsby-image"
import { Button } from "react-bootstrap"

export const IconLink = ({
  img,
  imgAlt,
  heading,
  description,
  link,
  linkText,
}) => (
  <>
    <div>
      <Img fluid={img} alt={imgAlt} className="mw-50 ml-auto mr-auto" />
      <h3 className="text-center">{heading}</h3>
      <p>{description}</p>
    </div>

    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button variant="outline-secondary" block>
        {linkText}
      </Button>
    </a>
  </>
)
