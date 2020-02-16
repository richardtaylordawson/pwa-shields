import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "shards-react"
import { Main } from "./../layouts/main"
import { SEO } from "./../components"

const NotFoundPage = () => (
  <Main>
    <SEO
      metaTitle="PWA Shields - Page Not Found"
      metaDescription="Page not found"
    />
    <Container>
      <Row>
        <Col>
          <h1>NOT FOUND</h1>
          <p>
            Unfortunately that route doesn't exist. Return to
            <Link to="/">home page</Link>
          </p>
        </Col>
      </Row>
    </Container>
  </Main>
)

export default NotFoundPage
