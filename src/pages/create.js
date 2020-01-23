import React, { useState } from "react"
import { MainLayout } from "./../layouts/mainLayout"
import { SEO, LinkTooltip } from "./../components"
import { copyToClipboard, getQueryVariable } from "./../components/utils"
import { Container, Row, Col, Form, FormGroup, Card, CardBody, Button, FormSelect, FormCheckbox, FormInput } from "shards-react"

const CreatePage = () => {
  const series = getQueryVariable("series") ? getQueryVariable("series") : "classic"

  const [formValues, setFormValues] = useState({
    "series": series,
    "color": "gray",
    "background": "white",
    "logo": "inverse",
    "link": ""
  })

  const [linkCheckbox, setLinkCheckbox] = useState(false)

  const handleInputChange = (event) => {
    event.persist()
    setFormValues(formValues => ({...formValues, [event.target.name]: event.target.value}))
  }

  let hideBackground = ""
  let hideLogo = ""
  let hideRainbow = ""
  let logoURL = `/1.0.0/series/${formValues.series}`;
  let snippet = ""

  if (formValues.series === "love") {
    hideLogo = "hidden"
    logoURL += `/${formValues.background}/${formValues.color}.svg`
  } else if (formValues.series !== "classic") {
    hideBackground = "hidden"
    hideLogo = "hidden"
    logoURL += `/${formValues.color}.svg`
  } else {
    hideRainbow = "hidden"

    if (formValues.background === "rainbow") {
      formValues.background = "white" // resets background to white in case user switches off rainbow
    }

    if (formValues.background !== "faded") {
      logoURL += `/${formValues.background}/${formValues.color}.svg`
      hideLogo = "hidden"
    } else {
      logoURL += `/${formValues.background}/${formValues.logo}/${formValues.color}.svg`
    }
  }

  if (linkCheckbox) {
    snippet += `[![PWA Shields](https://www.pwa-shields.com${logoURL})](${formValues.link})`
  } else {
    snippet = `![PWA Shields](https://www.pwa-shields.com${logoURL})`;
  }

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
                      <label htmlFor="preview" className="mr-3">Preview:</label>
                      <img src={logoURL} alt="shield preview" id="preview" />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="link">Link <LinkTooltip /></label>
                    <FormGroup className="flex flex-end">
                      <FormCheckbox toggle onClick={() => setLinkCheckbox(!linkCheckbox)} checked={!!linkCheckbox}></FormCheckbox>
                      <FormInput
                        type="url"
                        disabled={!linkCheckbox}
                        placeholder="https://pwa-shields.com"
                        value={formValues.link}
                        onChange={handleInputChange}
                        name="link"
                        id="link"
                      />
                    </FormGroup>
                  </FormGroup>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label htmlFor="series">Series</label>
                        <FormSelect value={formValues.series} onChange={handleInputChange} name="series" id="series">
                          <option value="classic">Classic</option>
                          <option value="certified">Certified</option>
                          <option value="install">Install</option>
                          <option value="dark">Dark</option>
                          <option value="love">Love</option>
                        </FormSelect>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label htmlFor="color">Color</label>
                        <FormSelect value={formValues.color} onChange={handleInputChange} name="color" id="color">
                          <option value="gray">Gray</option>
                          <option value="purple">Purple</option>
                          <option value="green">Green</option>
                        </FormSelect>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup className={hideBackground}>
                    <label htmlFor="background">Background</label>
                    <FormSelect value={formValues.background} onChange={handleInputChange} name="background" id="background">
                      <option value="white">White</option>
                      <option value="faded">Faded</option>
                      <option value="solid">Solid</option>
                      <option value="rainbow" className={hideRainbow}>Rainbow</option>
                    </FormSelect>
                  </FormGroup>
                  <FormGroup className={hideLogo}>
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
