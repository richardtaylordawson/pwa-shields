import * as React from "react"
import { Link } from "gatsby"
import Col from "react-bootstrap/cjs/Col.js"
import Container from "react-bootstrap/cjs/Container.js"
import Row from "react-bootstrap/cjs/Row.js"
import { Main } from "./../layouts/main"
import { SEO } from "./../components/seo"

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
            Unfortunately that route doesn't exist. Return to{" "}
            <Link to="/">home page</Link>
          </p>
        </Col>
      </Row>
    </Container>
  </Main>
)

export default NotFoundPage
