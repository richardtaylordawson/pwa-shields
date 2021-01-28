import React from "react"
import { Link } from "gatsby"
import { Card, Button } from "react-bootstrap"
import { Hint } from "./hint"

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
        description={hintDescription}
        variant="outline-secondary"
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
        <Button size="sm" variant="outline-secondary">
          Try me
        </Button>
      </Link>
    )
  }

  return (
    <Card className="h-md-90 mb-3">
      <Card.Body className={futureSeriesClass}>
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
      </Card.Body>
    </Card>
  )
}
