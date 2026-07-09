import * as React from "react"
import type { ReactNode } from "react"
import { Link } from "gatsby"
import Button from "react-bootstrap/cjs/Button.js"
import Card from "react-bootstrap/cjs/Card.js"
import { Hint } from "./hint"

type SeriesCardProps = {
  children: ReactNode
  title: string
  description: string
  linkQuery?: string
  hint?: boolean
  hintDescription?: string
  futureSeries?: boolean
}

export const SeriesCard = ({
  children,
  title,
  description,
  linkQuery,
  hint = false,
  hintDescription,
  futureSeries,
}: SeriesCardProps) => {
  let hintMarkup: ReactNode
  let futureSeriesClass: string | undefined
  let linkButton: ReactNode

  if (hint && hintDescription) {
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
