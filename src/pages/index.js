import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { MainLayout } from "./../layouts/mainLayout"
import { SEO } from "./../components"
import { Container, Row, Col, Button } from "shards-react"

const IndexPage = ({ data }) => (
  <MainLayout currentPage="home">
    <SEO
      title="PWA Shields - Home"
      description="Introduction to PWA Shields, the one place to create a personalized shield for your next project's README."
    />
    <Container>
      <Row className="mb-6">
        <Col xs={12} sm={12} md={7} lg={7}>
          <h1>Home</h1>
          <p>Personalize your app's README with custom, fun, PWA shields in SVG!</p>
          <p>PWA Shields was created to give developers a way to show off the fact that their app is a PWA. These SVG's are created to be consistent, concise, and really really good looking.</p>
          <Link to="/series"><Button className="mr-2 mb-3" outline theme="secondary">Get Started</Button></Link>
          <p className="small mb-0"><i>Current Version: 1.0.1</i></p>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5}>
          <img className="d-none d-md-inline float-md-right" width="75%" src="/images/logo-shadow.svg" alt="pwa shields logo" />
        </Col>
      </Row>
      <Row className="mb-6">
        <Col xs={12} sm={12} md={6} lg={6}>
          <h2>Usage</h2>
          <p>1. Create your personalized shield on our <Link to="/create" className="text-secondary text-decoration-underline">create page.</Link></p>
          <p>2. Paste your snippet in your project's README file.</p>
          <p>3. Sit back and enjoy your awesome, new looking README <span role="img" aria-label="sunglasses emoji">😎</span>.</p>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Img fluid={data.exampleProject.childImageSharp.fluid} className="img-fluid shadow rounded" alt="example project" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={4} lg={4} className="flex flex-column space-between mb-6">
          <div>
            <div>
            <Img fluid={data.bug.childImageSharp.fluid} className="max-width-50 ml-auto mr-auto" alt="bug icon" />
            </div>
            <h3 className="text-center">Bugs or Issues?</h3>
            <p>If you are experiencing any problems or have an idea you would like reviewed for a future release, then please open an issue.</p>
          </div>
          <a href="https://github.com/richardtaylordawson/pwa-shields/issues" target="_blank" rel="noopener noreferrer"><Button outline block theme="secondary">Open Bug or Issue</Button></a>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} className="flex flex-column space-between mb-6">
          <div>
            <Img fluid={data.fork.childImageSharp.fluid} className="max-width-50 ml-auto mr-auto" alt="fork icon" />
            <h3 className="text-center">Contributing</h3>
            <p>Would you like to contribute? Please see the contribution guidelines for more information on how to do so.</p>
          </div>
          <a href="https://github.com/richardtaylordawson/pwa-shields/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer"><Button outline block theme="secondary">Contribution Guidelines</Button></a>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} className="flex flex-column space-between mb-6">
          <div>
            <Img fluid={data.badge.childImageSharp.fluid} className="max-width-50 ml-auto mr-auto" alt="badge icon" />
            <h3 className="text-center">Shields.io</h3>
            <p>This project could not have been possible without the inspirational help of Shields.io. They are the leader in providing endpoints for hundreds of shields for developer README's.</p>
          </div>
          <a href="https://shields.io/" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-underline"><Button outline block theme="secondary">Shields.io</Button></a>
        </Col>
      </Row>
    </Container>
  </MainLayout>
)

export const query = graphql`
  query {
    logo: file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    exampleProject: file(relativePath: {eq: "example-project.png"}) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    badge: file(relativePath: {eq: "badge.png"}) {
      childImageSharp {
        fluid(maxWidth: 50, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    bug: file(relativePath: {eq: "bug.png"}) {
      childImageSharp {
        fluid(maxWidth: 50, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    fork: file(relativePath: {eq: "fork.png"}) {
      childImageSharp {
        fluid(maxWidth: 50, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
