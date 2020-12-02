import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Main } from "./../layouts/main"
import { SEO, SeriesCard, Shield } from "./../components"

const SeriesPage = () => (
  <Main currentPage="series">
    <SEO
      metaTitle="PWA Shields - Series"
      metaDescription="Current, up to date list of current shields offered as well as potential, in progress future shields."
    />
    <Container>
      <Row>
        <Col>
          <h1>Series</h1>
          <p>
            Current, up to date list of current shields offered. Don't see one
            you like or have an idea for one? Submit your idea to the{" "}
            <a
              href="https://github.com/richardtaylordawson/pwa-shields/issues"
              className="text-secondary text-decoration-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              project repo
            </a>
            .
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={7} lg={7}>
          <SeriesCard
            title="Classic"
            linkQuery="classic"
            description="Simple and clean, just like your app"
          >
            <Row>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/classic/white/gray.svg" />
                <Shield src="/1.0.0/series/classic/white/purple.svg" />
                <Shield src="/1.0.0/series/classic/white/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/classic/faded/inverse/gray.svg" />
                <Shield src="/1.0.0/series/classic/faded/inverse/purple.svg" />
                <Shield src="/1.0.0/series/classic/faded/inverse/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/classic/faded/white/gray.svg" />
                <Shield src="/1.0.0/series/classic/faded/white/purple.svg" />
                <Shield src="/1.0.0/series/classic/faded/white/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/classic/solid/gray.svg" />
                <Shield src="/1.0.0/series/classic/solid/purple.svg" />
                <Shield src="/1.0.0/series/classic/solid/green.svg" />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5}>
          <SeriesCard
            title="Dark"
            linkQuery="dark"
            description="Shields....in #DarkMode"
          >
            <Row>
              <Col xs={12} sm={12} md={2} lg={2}>
                <Shield src="/1.0.0/series/dark/gray.svg" />
                <Shield src="/1.0.0/series/dark/purple.svg" />
                <Shield src="/1.0.0/series/dark/green.svg" />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
        <Col xs={12} sm={12} md={8} lg={8}>
          <SeriesCard
            title="Gatsby"
            linkQuery="gatsby"
            description="A tribute to Gatsby making PWA's simple & easy"
          >
            <Row>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/gatsby/white/gray.svg" />
                <Shield src="/1.0.0/series/gatsby/white/purple.svg" />
                <Shield src="/1.0.0/series/gatsby/white/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/gatsby/faded/inverse/gray.svg" />
                <Shield src="/1.0.0/series/gatsby/faded/inverse/purple.svg" />
                <Shield src="/1.0.0/series/gatsby/faded/inverse/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/gatsby/faded/white/gray.svg" />
                <Shield src="/1.0.0/series/gatsby/faded/white/purple.svg" />
                <Shield src="/1.0.0/series/gatsby/faded/white/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/gatsby/solid/gray.svg" />
                <Shield src="/1.0.0/series/gatsby/solid/purple.svg" />
                <Shield src="/1.0.0/series/gatsby/solid/green.svg" />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <SeriesCard
            title="Certified"
            linkQuery="certified"
            description="Show off the fact that your app is PWA certified"
            hint={true}
            hintId="certifiedHint"
            hintDescription={`Please note that the use of the word "certified" was just another way of saying your application is a PWA. It does not mean it is certified by PWA Shields or another application.`}
          >
            <Row>
              <Col xs={12} sm={12} md={2} lg={2}>
                <Shield src="/1.0.0/series/certified/gray.svg" />
                <Shield src="/1.0.0/series/certified/purple.svg" />
                <Shield src="/1.0.0/series/certified/green.svg" />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <SeriesCard
            title="Install"
            linkQuery="install"
            description="Get your users to install your cool, hip, PWA"
          >
            <Row>
              <Col xs={12} sm={12} md={2} lg={2}>
                <Shield src="/1.0.0/series/install/gray.svg" />
                <Shield src="/1.0.0/series/install/purple.svg" />
                <Shield src="/1.0.0/series/install/green.svg" />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
        <Col xs={12} sm={12} md={8} lg={8}>
          <SeriesCard
            title="React"
            linkQuery="react"
            description="For those Create React App lovers that get PWA out of the box"
          >
            <Row>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/react/white/gray.svg" />
                <Shield src="/1.0.0/series/react/white/purple.svg" />
                <Shield src="/1.0.0/series/react/white/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/react/faded/inverse/gray.svg" />
                <Shield src="/1.0.0/series/react/faded/inverse/purple.svg" />
                <Shield src="/1.0.0/series/react/faded/inverse/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/react/faded/white/gray.svg" />
                <Shield src="/1.0.0/series/react/faded/white/purple.svg" />
                <Shield src="/1.0.0/series/react/faded/white/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/react/solid/white/gray.svg" />
                <Shield src="/1.0.0/series/react/solid/white/purple.svg" />
                <Shield src="/1.0.0/series/react/solid/white/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/react/solid/blue/gray.svg" />
                <Shield src="/1.0.0/series/react/solid/blue/purple.svg" />
                <Shield src="/1.0.0/series/react/solid/blue/green.svg" />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7}>
          <SeriesCard
            title="Love"
            linkQuery="love"
            description={`Classic, but with a little more...well, love <span role="Shield" aria-label="heart emoji">❤️</span>`}
          >
            <Row>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/love/white/gray.svg" />
                <Shield src="/1.0.0/series/love/white/purple.svg" />
                <Shield src="/1.0.0/series/love/white/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/love/faded/gray.svg" />
                <Shield src="/1.0.0/series/love/faded/purple.svg" />
                <Shield src="/1.0.0/series/love/faded/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/love/solid/gray.svg" />
                <Shield src="/1.0.0/series/love/solid/purple.svg" />
                <Shield src="/1.0.0/series/love/solid/green.svg" />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <Shield src="/1.0.0/series/love/rainbow/gray.svg" />
                <Shield src="/1.0.0/series/love/rainbow/purple.svg" />
                <Shield src="/1.0.0/series/love/rainbow/green.svg" />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
      </Row>
    </Container>
  </Main>
)

export default SeriesPage
