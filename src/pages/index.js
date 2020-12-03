import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Main } from "./../layouts/main"
import { SEO, IconLink } from "./../components"
import LogoShadow from "./../images/logo-shadow.svg"

const IndexPage = ({ data }) => (
  <Main currentPage="home">
    <SEO
      metaTitle="PWA Shields - Home"
      metaDescription="Introduction to PWA Shields, the one place to create a personalized shield for your next project's README."
    />
    <Container>
      <Row className="mb-5">
        <Col xs={12} sm={12} md={7} lg={7}>
          <h1>Home</h1>
          <p>
            Personalize your app's README with custom, fun, PWA shields in SVG!
          </p>
          <p>
            PWA Shields was created to give developers a way to show off the
            fact that their app is a PWA. These SVG's are created to be
            consistent, concise, and really really good looking.
          </p>

          <Link to="/series">
            <Button className="mb-3" variant="outline-secondary">
              Get Started
            </Button>
          </Link>

          <p>
            <small>
              <em>Current Version: 1.10.1</em>
            </small>
          </p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5}>
          <img
            className="d-none d-md-inline float-md-right"
            width="75%"
            src={LogoShadow}
            alt="pwa shields logo"
          />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={12} sm={12} md={6} lg={6}>
          <h2>Usage</h2>
          <p>
            1. Create your personalized shield on our{" "}
            <Link
              to="/create"
              className="text-secondary text-decoration-underline"
            >
              create page
            </Link>
            .
          </p>
          <p>2. Paste your snippet in your project's README file.</p>
          <p>
            3. Sit back and enjoy your awesome, new looking README{" "}
            <span role="img" aria-label="sunglasses emoji">
              😎
            </span>
            .
          </p>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Img
            fluid={data.exampleProject.childImageSharp.fluid}
            className="img-fluid shadow rounded"
            alt="example project"
          />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className="d-flex flex-column justify-content-between mb-5"
        >
          <IconLink
            img={data.bug.childImageSharp.fluid}
            imgAlt="bug icon"
            heading="Bugs or Issues?"
            description="If you are experiencing any problems or have an idea you would like reviewed for a future release, then please open an issue."
            link="https://github.com/richardtaylordawson/pwa-shields/issues"
            linkText="Open Bug or Issue"
          />
        </Col>

        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className="d-flex flex-column justify-content-between mb-5"
        >
          <IconLink
            img={data.fork.childImageSharp.fluid}
            imgAlt="fork icon"
            heading="Contributing"
            description="Would you like to contribute? Please see the contribution guidelines for more information on how to do so."
            link="https://github.com/richardtaylordawson/pwa-shields/blob/master/CONTRIBUTING.md"
            linkText="Contribution Guidelines"
          />
        </Col>

        <Col
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className="d-flex flex-column justify-content-between mb-5"
        >
          <IconLink
            img={data.badge.childImageSharp.fluid}
            imgAlt="badge icon"
            heading="Shields.io"
            description="This project could not have been possible without the inspirational help of Shields.io. They are the leader in providing endpoints for hundreds of shields for developer README's."
            link="https://shields.io/"
            linkText="Shields.io"
          />
        </Col>
      </Row>
    </Container>
  </Main>
)

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      ...Image350
    }

    exampleProject: file(relativePath: { eq: "example-project.png" }) {
      ...Image550
    }

    badge: file(relativePath: { eq: "badge.png" }) {
      ...Image50
    }

    bug: file(relativePath: { eq: "bug.png" }) {
      ...Image50
    }

    fork: file(relativePath: { eq: "fork.png" }) {
      ...Image50
    }
  }
`

export default IndexPage
