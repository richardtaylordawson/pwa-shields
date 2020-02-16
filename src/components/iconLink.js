import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Button } from "shards-react"

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
      <Button outline block theme="secondary">
        {linkText}
      </Button>
    </a>
  </>
)

IconLink.propTypes = {
  img: PropTypes.object.isRequired,
  imgAlt: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
}
