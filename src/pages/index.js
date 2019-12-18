import React from "react"
import { MainLayout } from "./../layouts/mainLayout"
import { SEO } from "./../components"
import { Container, Row, Col, Card, CardBody, Button } from "shards-react"

const IndexPage = () => (
  <MainLayout currentPage="series">
    <SEO title="PWA Shields - Series" />
    <Container>
      <Row>
        <Col>
          <h1>Series</h1>
          <p>Current, up to date list of current shields offered. Don't see one you like and have an idea for one? Submit your idea to the <a href="https://github.com/richardtaylordawson/pwa-shields/issues" className="text-primary" target="_blank" rel="noopener noreferrer">project repo</a></p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={7} lg={7}>
          <Card className="flex-card mb-3">
            <CardBody>
              <div class="flex-group space-between">
                <h3>Classic</h3>
                <a href="/create?series=classic"><Button size="sm" outline theme="secondary">Try me</Button></a>
              </div>
              <p className="small"><i>Simple and clean, just like your app</i></p>
              <Row>
                <Col xs={12} sm={3} md={12} lg={2}>
                  <img className="mb-3 mr-3" src="/series/classic/white/gray.svg" alt="classic/white series gray" />
                  <img className="mb-3 mr-3" src="/series/classic/white/purple.svg" alt="classic/white series purple" />
                  <img className="mb-3" src="/series/classic/white/green.svg" alt="classic/white series green" />
                </Col>
                <Col xs={12} sm={3} md={12} lg={2}>
                  <img className="mb-3 mr-3" src="/series/classic/faded/inverse/gray.svg" alt="classic/faded/inverse series gray" />
                  <img className="mb-3 mr-3" src="/series/classic/faded/inverse/purple.svg" alt="classic/faded/inverse series purple" />
                  <img className="mb-3" src="/series/classic/faded/inverse/green.svg" alt="classic/faded/inverse series green" />
                </Col>
                <Col xs={12} sm={3} md={12} lg={2}>
                  <img className="mb-3 mr-3" src="/series/classic/faded/white/gray.svg" alt="classic/faded/white series gray" />
                  <img className="mb-3 mr-3" src="/series/classic/faded/white/purple.svg" alt="classic/faded/white series purple" />
                  <img className="mb-3" src="/series/classic/faded/white/green.svg" alt="classic/faded/white series green" />
                </Col>
                <Col xs={12} sm={3} md={12} lg={2}>
                  <img className="mb-3 mr-3" src="/series/classic/solid/gray.svg" alt="classic/solid series gray" />
                  <img className="mb-3 mr-3" src="/series/classic/solid/purple.svg" alt="classic/solid series purple" />
                  <img className="mb-3" src="/series/classic/solid/green.svg" alt="classic/solid series green" />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5}>
          <Card className="flex-card mb-3">
            <CardBody>
              <div class="flex-group space-between">
                <h3>Certified</h3>
                <a href="/create?series=certified"><Button size="sm" outline theme="secondary">Try me</Button></a>
              </div>
              <p className="small"><i>Show off the fact that your app is PWA certified</i></p>
              <Row>
                <Col xs={12} sm={12} md={2} lg={2}>
                  <img className="mb-3 mr-3" src="/series/certified/gray.svg" alt="certified series gray" />
                  <img className="mb-3 mr-3" src="/series/certified/purple.svg" alt="certified series purple" />
                  <img className="mb-3" src="/series/certified/green.svg" alt="certified series green" />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={5} lg={5}>
          <Card className="flex-card mb-3">
            <CardBody>
              <div class="flex-group space-between">
                <h3>Install</h3>
                <a href="/create?series=install"><Button size="sm" outline theme="secondary">Try me</Button></a>
              </div>
              <p className="small"><i>Get your users to install your cool, hip, PWA</i></p>
              <Row>
                <Col xs={12} sm={12} md={2} lg={2}>
                  <img className="mb-3 mr-3" src="/series/install/gray.svg" alt="install series gray" />
                  <img className="mb-3 mr-3" src="/series/install/purple.svg" alt="install series purple" />
                  <img className="mb-3" src="/series/install/green.svg" alt="install series green" />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={7} lg={7}>
          <Card className="flex-card mb-3">
            <CardBody className="opaque">
              <h3>Language</h3>
              <p className="small"><i>Series currently under work and will be up soon.</i></p>
              <Row>
                <Col xs={12} sm={2} md={12} lg={2}>
                  <img className="mb-3 mr-3" src="/series/future/gray.svg" alt="future series gray" />
                  <img className="mb-3 mr-3" src="/series/future/purple.svg" alt="future series purple" />
                  <img className="mb-3" src="/series/future/green.svg" alt="future series green" />
                </Col>
                <Col xs={12} sm={2} md={12} lg={2}>
                  <img className="mb-3 mr-3" src="/series/future/gray.svg" alt="future series gray" />
                  <img className="mb-3 mr-3" src="/series/future/purple.svg" alt="future series purple" />
                  <img className="mb-3" src="/series/future/green.svg" alt="future series green" />
                </Col>
                <Col xs={12} sm={2} md={12} lg={2}>
                  <img className="mb-3 mr-3" src="/series/future/gray.svg" alt="future series gray" />
                  <img className="mb-3 mr-3" src="/series/future/purple.svg" alt="future series purple" />
                  <img className="mb-3" src="/series/future/green.svg" alt="future series green" />
                </Col>
                <Col xs={12} sm={2} md={12} lg={2}>
                  <img className="mb-3 mr-3" src="/series/future/gray.svg" alt="future series gray" />
                  <img className="mb-3 mr-3" src="/series/future/purple.svg" alt="future series purple" />
                  <img className="mb-3" src="/series/future/green.svg" alt="future series green" />
                </Col>
                <Col xs={12} sm={2} md={12} lg={2}>
                  <img className="mb-3 mr-3" src="/series/future/gray.svg" alt="future series gray" />
                  <img className="mb-3 mr-3" src="/series/future/purple.svg" alt="future series purple" />
                  <img className="mb-3" src="/series/future/green.svg" alt="future series green" />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card className="flex-card mb-3">
            <CardBody className="opaque">
              <h3>Browser</h3>
              <p className="small"><i>Series currently under work and will be up soon.</i></p>
              <Row>
                <Col xs={12} sm={3} md={12} lg={3}>
                  <img className="mb-3 mr-3" src="/series/future/gray.svg" alt="future series gray" />
                  <img className="mb-3 mr-3" src="/series/future/purple.svg" alt="future series purple" />
                  <img className="mb-3" src="/series/future/green.svg" alt="future series green" />
                </Col>
                <Col xs={12} sm={3} md={12} lg={3}>
                  <img className="mb-3 mr-3" src="/series/future/gray.svg" alt="future series gray" />
                  <img className="mb-3 mr-3" src="/series/future/purple.svg" alt="future series purple" />
                  <img className="mb-3" src="/series/future/green.svg" alt="future series green" />
                </Col>
                <Col xs={12} sm={3} md={12} lg={3}>
                  <img className="mb-3 mr-3" src="/series/future/gray.svg" alt="future series gray" />
                  <img className="mb-3 mr-3" src="/series/future/purple.svg" alt="future series purple" />
                  <img className="mb-3" src="/series/future/green.svg" alt="future series green" />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Card className="flex-card mb-3">
            <CardBody className="opaque">
              <h3>Love</h3>
              <p className="small"><i>Series currently under work and will be up soon.</i></p>
              <Row>
                <Col xs={12} sm={3} md={12} lg={3}>
                  <img className="mb-3 mr-3" src="/series/future/gray.svg" alt="future series gray" />
                  <img className="mb-3 mr-3" src="/series/future/purple.svg" alt="future series purple" />
                  <img className="mb-3" src="/series/future/green.svg" alt="future series green" />
                </Col>
                <Col xs={12} sm={3} md={12} lg={3}>
                  <img className="mb-3 mr-3" src="/series/future/gray.svg" alt="future series gray" />
                  <img className="mb-3 mr-3" src="/series/future/purple.svg" alt="future series purple" />
                  <img className="mb-3" src="/series/future/green.svg" alt="future series green" />
                </Col>
                <Col xs={12} sm={3} md={12} lg={3}>
                  <img className="mb-3 mr-3" src="/series/future/gray.svg" alt="future series gray" />
                  <img className="mb-3 mr-3" src="/series/future/purple.svg" alt="future series purple" />
                  <img className="mb-3" src="/series/future/green.svg" alt="future series green" />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </MainLayout>
)

export default IndexPage
