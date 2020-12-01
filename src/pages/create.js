import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Main } from "./../layouts/main"
import { SEO } from "./../components"

const CreateShield = React.lazy(() => import("./../components/createShield"))

const CreatePage = () => {
  return (
    <Main currentPage="create">
      <SEO
        metaTitle="PWA Shields - Create"
        metaDescription="Create your personalized shield for your project's README to show off the fact that it is a PWA."
      />
      <Container>
        <Row>
          <Col>
            <h1>Create</h1>
            <p>
              Easily create a PWA shield for your next project or existing PWA's
              README file.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            {!(typeof window === "undefined") && (
              <React.Suspense fallback={<div />}>
                <CreateShield />
              </React.Suspense>
            )}
          </Col>
        </Row>
      </Container>
    </Main>
  )
}

export default CreatePage
