import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Button, Col } from "shards-react"

export const IconLink = ({ img, imgAlt, heading, description, link, linkText }) => (
  <Col xs={12} sm={12} md={4} lg={4} className="flex flex-column space-between mb-6">
    <div>
      <Img fluid={img} alt={imgAlt} className="max-width-50 ml-auto mr-auto" />
      <h3 className="text-center">{heading}</h3>
      <p>{description}</p>
    </div>

    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button outline block theme="secondary">{linkText}</Button>
    </a>
  </Col>
)

IconLink.propTypes = {
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
}
