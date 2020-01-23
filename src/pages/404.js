import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "shards-react"
import { MainLayout } from "./../layouts/mainLayout"
import { SEO } from "./../components"

const NotFoundPage = () => (
  <MainLayout>
    <SEO
      title="PWA Shields - Page Not Found"
      description="Page not found"
    />
    <Container>
      <Row>
        <Col>
          <h1>NOT FOUND</h1>
          <p>Unfortunately that route doesn't exist. Return to <Link to="/">home page</Link></p>
        </Col>
      </Row>
    </Container>
  </MainLayout>
)

export default NotFoundPage
