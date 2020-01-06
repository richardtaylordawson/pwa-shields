import React, { useState } from "react"
import { MainLayout } from "./../layouts/mainLayout"
import { SEO } from "./../components"
import { copyToClipboard, getQueryVariable } from "./../components/utils"
import { Container, Row, Col, Form, FormGroup, Card, CardBody, Button, FormSelect } from "shards-react"

const CreatePage = () => {
  const series = getQueryVariable("series") ? getQueryVariable("series") : "classic"

  const [formValues, setFormValues] = useState({
    "series": series,
    "color": "gray",
    "background": "white",
    "logo": "inverse"
  })

  const handleInputChange = (event) => {
    event.persist()
    setFormValues(formValues => ({...formValues, [event.target.name]: event.target.value}))
  }

  let classicOrNo = ""
  let fadedOrNo = ""
  let logoURL = `/1.0.0/series/${formValues.series}`;

  if (formValues.series !== "classic") {
    classicOrNo = "hidden"
    fadedOrNo = "hidden"
    logoURL += `/${formValues.color}.svg`;
  } else {
    if(formValues.background !== "faded") {
      logoURL += `/${formValues.background}/${formValues.color}.svg`
      fadedOrNo = "hidden"
    } else {
      logoURL += `/${formValues.background}/${formValues.logo}/${formValues.color}.svg`
    }
  }

  const snippet = `![PWA Shields](https://www.pwa-shields.com${logoURL})`

  return (
    <MainLayout currentPage="create">
      <SEO
        title="PWA Shields - Create"
        description="Create your personalized shield for your project's README to show off the fact that it is a PWA."
      />
      <Container>
        <Row>
          <Col>
            <h1>Create</h1>
            <p>Easily create a PWA shield for your next project or existing PWA's README file.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Form>
                  <FormGroup>
                    <div className="flex-group">
                      <label className="mr-3">Preview:</label>
                      <img src={logoURL} alt="shield preview" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="series">Series</label>
                    <FormSelect value={formValues.series} onChange={handleInputChange} name="series" id="series">
                      <option value="classic">Classic</option>
                      <option value="certified">Certified</option>
                      <option value="install">Install</option>
                      <option value="dark">Dark</option>
                    </FormSelect>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="color">Color</label>
                    <FormSelect value={formValues.color} onChange={handleInputChange} name="color" id="color">
                      <option value="gray">Gray</option>
                      <option value="purple">Purple</option>
                      <option value="green">Green</option>
                    </FormSelect>
                  </FormGroup>
                  <FormGroup className={classicOrNo}>
                    <label htmlFor="background">Background</label>
                    <FormSelect value={formValues.background} onChange={handleInputChange} name="background" id="background">
                      <option value="white">White</option>
                      <option value="faded">Faded</option>
                      <option value="solid">Solid</option>
                    </FormSelect>
                  </FormGroup>
                  <FormGroup className={fadedOrNo}>
                    <label htmlFor="logo">Logo</label>
                    <FormSelect value={formValues.logo} onChange={handleInputChange} name="logo" id="logo">
                      <option value="inverse">Inverse</option>
                      <option value="white">White</option>
                    </FormSelect>
                  </FormGroup>
                  <Button outline theme="secondary" onClick={event => copyToClipboard(snippet, event, "Copy snippet")}>Copy snippet</Button>
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
