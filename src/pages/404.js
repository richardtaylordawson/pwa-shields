import React from "react"
import { Link } from "gatsby"
import { MainLayout } from "./../layouts/mainLayout"
import { SEO } from "./../components"
import { Container, Row, Col } from "shards-react"

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
