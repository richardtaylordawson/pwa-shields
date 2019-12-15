import React, { useState } from "react"
import { MainLayout } from "./../layouts/mainLayout"
import { SEO } from "./../components"
import { copyToClipboard, getQueryVariable } from "./../components/utils"
import { Container, Row, Col, Form, FormGroup, Card, CardBody, Button, FormSelect } from "shards-react"

const CreatePage = () => {
  const series = getQueryVariable("series") ? getQueryVariable("series") : "classic"

  const [formValues, setFormValues] = useState({
    "series": series,
    "color": "gray"
  })

  const handleInputChange = (event) => {
    event.persist()
    setFormValues(formValues => ({...formValues, [event.target.name]: event.target.value}))
  }

  const snippet = `![PWA Shields](https://pwa-shields.richarddawson.codes/${formValues.series}/${formValues.color}.svg)`

  return (
    <MainLayout currentPage="create">
      <SEO title="PWA Shields - Create" />
      <Container>
        <Row>
          <Col>
            <h1>Create</h1>
            <p>Easily create a PWA shield for your next project or existing PWA.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Form>
                  <FormGroup>
                    <div className="flex-group">
                      <label htmlFor="#preview" className="mr-3">Preview:</label>
                      <img src={`/${formValues.series}/${formValues.color}.svg`} alt="shield preview" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="#series">Series</label>
                    <FormSelect value={formValues.series} onChange={handleInputChange} name="series">
                      <option value="classic">Classic</option>
                      <option value="certified">Certified</option>
                      <option value="install">Install</option>
                    </FormSelect>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="#color">Color</label>
                    <FormSelect value={formValues.color} onChange={handleInputChange} name="color">
                      <option value="gray">Gray</option>
                      <option value="purple">Purple</option>
                      <option value="green">Green</option>
                    </FormSelect>
                  </FormGroup>
                  <Button outline theme="secondary" onClick={event => copyToClipboard(snippet, event, "Copy markdown")}>Copy markdown</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}

export default CreatePage
