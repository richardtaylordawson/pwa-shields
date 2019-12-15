import React from "react"
import { MainLayout } from "./../layouts/mainLayout"
import { Container, Row, Col, Card, CardBody, Button } from "shards-react"

const IndexPage = () => (
  <MainLayout currentPage="series">
    <Container>
      <Row>
        <Col>
          <h1>Series</h1>
          <p>Current, up to date list of current shields offered. Don't see one you like and have an idea for one? Submit your idea <a href="https://github.com/richardtaylordawson/pwa-shields/issues" target="_blank" rel="noopener noreferrer">here</a></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-3">
            <CardBody>
              <h3>Classic</h3>
              <p className="small"><i>Simple and clean, just like your app</i></p>
              <div className="flex-group space-between">
                <p className="mr-2">Gray</p>
                <img src="/classic/gray.svg" alt="classic series gray" />
              </div>
              <div className="flex-group space-between">
                <p className="mr-2">Purple</p>
                <img src="/classic/purple.svg" alt="classic series purple" />
              </div>
              <div className="flex-group space-between">
                <p className="mr-2">Green</p>
                <img src="/classic/green.svg" alt="classic series green" />
              </div>
              <a href="/create?series=classic"><Button block outline theme="secondary">Try me</Button></a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="mb-3">
            <CardBody>
              <h3>Certified</h3>
              <p className="small"><i>Show off the fact that your app is PWA certified</i></p>
              <div className="flex-group space-between">
                <p className="mr-2">Gray</p>
                <img src="/certified/gray.svg" alt="certified series gray" />
              </div>
              <div className="flex-group space-between">
                <p className="mr-2">Purple</p>
                <img src="/certified/purple.svg" alt="certified series purple" />
              </div>
              <div className="flex-group space-between">
                <p className="mr-2">Green</p>
                <img src="/certified/green.svg" alt="certified series green" />
              </div>
              <a href="/create?series=certified"><Button block outline theme="secondary">Try me</Button></a>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="mb-3">
            <CardBody>
              <h3>Install</h3>
              <p className="small"><i>Get your users to install your cool, hip, PWA</i></p>
              <div className="flex-group space-between">
                <p className="mr-2">Gray</p>
                <img src="/install/gray.svg" alt="install series gray" />
              </div>
              <div className="flex-group space-between">
                <p className="mr-2">Purple</p>
                <img src="/install/purple.svg" alt="install series purple" />
              </div>
              <div className="flex-group space-between">
                <p className="mr-2">Green</p>
                <img src="/install/green.svg" alt="install series green" />
              </div>
              <a href="/create?series=install"><Button block outline theme="secondary">Try me</Button></a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </MainLayout>
)

export default IndexPage
