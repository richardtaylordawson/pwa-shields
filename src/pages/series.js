import React from "react"
import { Container, Row, Col } from "shards-react"
import { Main } from "./../layouts/main"
import { SEO, SeriesCard } from "./../components"

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
            you like and have an idea for one? Submit your idea to the{" "}
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
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/classic/white/gray.svg"
                  alt="series classic white gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/classic/white/purple.svg"
                  alt="series classic white purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/classic/white/green.svg"
                  alt="series classic white green"
                />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/classic/faded/inverse/gray.svg"
                  alt="series classic faded inverse gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/classic/faded/inverse/purple.svg"
                  alt="series classic faded inverse gray purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/classic/faded/inverse/green.svg"
                  alt="series classic faded inverse gray green"
                />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/classic/faded/white/gray.svg"
                  alt="series classic faded white gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/classic/faded/white/purple.svg"
                  alt="series classic faded white purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/classic/faded/white/green.svg"
                  alt="series classic faded white green"
                />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/classic/solid/gray.svg"
                  alt="series classic solid gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/classic/solid/purple.svg"
                  alt="series classic solid purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/classic/solid/green.svg"
                  alt="series classic solid green"
                />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5}>
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
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/certified/gray.svg"
                  alt="series certified gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/certified/purple.svg"
                  alt="series certified purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/certified/green.svg"
                  alt="series certified green"
                />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <SeriesCard
            title="Install"
            linkQuery="install"
            description="Get your users to install your cool, hip, PWA"
          >
            <Row>
              <Col xs={12} sm={12} md={2} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/install/gray.svg"
                  alt="series install gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/install/purple.svg"
                  alt="series install purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/install/green.svg"
                  alt="series install green"
                />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <SeriesCard
            title="Dark"
            linkQuery="dark"
            description="Shields....in #DarkMode"
          >
            <Row>
              <Col xs={12} sm={12} md={2} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/dark/gray.svg"
                  alt="dark series gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/dark/purple.svg"
                  alt="dark series purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/dark/green.svg"
                  alt="dark series green"
                />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7}>
          <SeriesCard
            title="Love"
            linkQuery="love"
            description={`Classic, but with a little more...well, love <span role="img" aria-label="heart emoji">❤️</span>`}
          >
            <Row>
              <Col xs={12} sm={3} md={12} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/love/white/gray.svg"
                  alt="series love white gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/love/white/purple.svg"
                  alt="series love white purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/love/white/green.svg"
                  alt="series love white green"
                />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/love/faded/gray.svg"
                  alt="series love faded gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/love/faded/purple.svg"
                  alt="series love faded gray purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/love/faded/green.svg"
                  alt="series love faded gray green"
                />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/love/solid/gray.svg"
                  alt="series love solid gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/love/solid/purple.svg"
                  alt="series love solid purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/love/solid/green.svg"
                  alt="series love solid green"
                />
              </Col>
              <Col xs={12} sm={3} md={12} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/love/rainbow/gray.svg"
                  alt="series love rainbow gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/love/rainbow/purple.svg"
                  alt="series love rainbow purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/love/rainbow/green.svg"
                  alt="series love rainbow green"
                />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5}>
          <SeriesCard
            title="Browser"
            description="Series currently under work and will be up soon."
            futureSeries={true}
          >
            <Row>
              <Col xs={12} sm={3} md={12} lg={4}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/gray.svg"
                  alt="series future gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/purple.svg"
                  alt="series future purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/future/green.svg"
                  alt="series future green"
                />
              </Col>
              <Col xs={12} sm={3} md={12} lg={4}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/gray.svg"
                  alt="series future gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/purple.svg"
                  alt="series future purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/future/green.svg"
                  alt="series future green"
                />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12}>
          <SeriesCard
            title="Language"
            description="Series currently under work and will be up soon."
            futureSeries={true}
          >
            <Row>
              <Col xs={12} sm={2} md={12} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/gray.svg"
                  alt="series future gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/purple.svg"
                  alt="series future purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/future/green.svg"
                  alt="series future green"
                />
              </Col>
              <Col xs={12} sm={2} md={12} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/gray.svg"
                  alt="series future gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/purple.svg"
                  alt="series future purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/future/green.svg"
                  alt="series future green"
                />
              </Col>
              <Col xs={12} sm={2} md={12} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/gray.svg"
                  alt="series future gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/purple.svg"
                  alt="series future purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/future/green.svg"
                  alt="series future green"
                />
              </Col>
              <Col xs={12} sm={2} md={12} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/gray.svg"
                  alt="series future gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/purple.svg"
                  alt="series future purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/future/green.svg"
                  alt="series future green"
                />
              </Col>
              <Col xs={12} sm={2} md={12} lg={2}>
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/gray.svg"
                  alt="series future gray"
                />
                <img
                  className="mb-3 mr-3"
                  src="/1.0.0/series/future/purple.svg"
                  alt="series future purple"
                />
                <img
                  className="mb-3"
                  src="/1.0.0/series/future/green.svg"
                  alt="series future green"
                />
              </Col>
            </Row>
          </SeriesCard>
        </Col>
      </Row>
    </Container>
  </Main>
)

export default SeriesPage
