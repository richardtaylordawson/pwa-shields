import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Card, CardBody, Button } from "shards-react"
import { Hint } from "./"

export const SeriesCard = ({
  children,
  title,
  description,
  linkQuery,
  hint = false,
  hintId,
  hintDescription,
  futureSeries,
}) => {
  let hintMarkup
  let futureSeriesClass
  let linkButton

  if (hint) {
    hintMarkup = (
      <Hint
        id={hintId}
        description={hintDescription}
        theme="secondary"
        placement="right"
      />
    )
  }

  if (futureSeries) {
    futureSeriesClass = "opaque"
  }

  if (linkQuery) {
    linkButton = (
      <Link to={`/create?series=${linkQuery}`}>
        <Button size="sm" outline theme="secondary">
          Try me
        </Button>
      </Link>
    )
  }

  return (
    <Card className="h-md-90 mb-3">
      <CardBody className={futureSeriesClass}>
        <div className="d-flex flex-md-column flex-lg-row justify-content-between">
          <h3>
            {title}
            {hintMarkup}
          </h3>
          {linkButton}
        </div>
        <p>
          <small>
            <em dangerouslySetInnerHTML={{ __html: `${description}` }}></em>
          </small>
        </p>
        {children}
      </CardBody>
    </Card>
  )
}

SeriesCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkQuery: PropTypes.string,
  hint: PropTypes.bool,
  hintId: PropTypes.string,
  hintDescription: PropTypes.string,
  futureSeries: PropTypes.bool,
}
