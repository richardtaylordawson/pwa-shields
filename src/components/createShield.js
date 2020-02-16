import React, { useState } from "react"
import {
  Row,
  Col,
  Form,
  FormGroup,
  Card,
  CardBody,
  Button,
  FormSelect,
  FormCheckbox,
  FormInput,
} from "shards-react"
import { copyToClipboard, getQueryVariable } from "./utils"
import { Hint } from "./"

export const CreateShield = () => {
  const [linkCheckbox, setLinkCheckbox] = useState(false)
  const [formValues, setFormValues] = useState({
    series: getQueryVariable("series") ? getQueryVariable("series") : "classic",
    color: "gray",
    background: "white",
    logo: "inverse",
    link: "",
  })

  const handleInputChange = event => {
    event.persist()
    setFormValues(formValues => ({
      ...formValues,
      [event.target.name]: event.target.value,
    }))
  }

  let hideBackground = ""
  let hideLogo = ""
  let hideRainbow = ""
  let logoURL = `/1.0.0/series/${formValues.series}`
  let snippet = ""

  if (formValues.series === "love") {
    hideLogo = "d-none"
    logoURL += `/${formValues.background}/${formValues.color}.svg`
  } else if (formValues.series !== "classic") {
    hideBackground = "d-none"
    hideLogo = "d-none"
    logoURL += `/${formValues.color}.svg`
  } else {
    hideRainbow = "d-none"

    if (formValues.background === "rainbow") {
      formValues.background = "white" // resets background to white in case user switches off rainbow
    }

    if (formValues.background !== "faded") {
      logoURL += `/${formValues.background}/${formValues.color}.svg`
      hideLogo = "d-none"
    } else {
      logoURL += `/${formValues.background}/${formValues.logo}/${formValues.color}.svg`
    }
  }

  if (linkCheckbox) {
    snippet += `[![PWA Shields](https://www.pwa-shields.com${logoURL})](${formValues.link})`
  } else {
    snippet = `![PWA Shields](https://www.pwa-shields.com${logoURL})`
  }

  return (
    <Card>
      <CardBody>
        <Form>
          <FormGroup>
            <div className="d-flex">
              <label htmlFor="preview" className="mr-3">
                Preview:
              </label>
              <img src={logoURL} alt="shield preview" id="preview" />
            </div>
          </FormGroup>
          <FormGroup>
            <label htmlFor="link">
              Link
              <Hint
                id="linkHint"
                description={`This will allow your shield to act as a link to an external site.`}
                theme="secondary"
                placement="right"
              />
            </label>
            <FormGroup className="d-flex align-items-end">
              <FormCheckbox
                toggle
                onChange={() => setLinkCheckbox(!linkCheckbox)}
                checked={linkCheckbox}
              ></FormCheckbox>
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
                <FormSelect
                  value={formValues.series}
                  onChange={handleInputChange}
                  name="series"
                  id="series"
                >
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
                <FormSelect
                  value={formValues.color}
                  onChange={handleInputChange}
                  name="color"
                  id="color"
                >
                  <option value="gray">Gray</option>
                  <option value="purple">Purple</option>
                  <option value="green">Green</option>
                </FormSelect>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className={hideBackground}>
            <label htmlFor="background">Background</label>
            <FormSelect
              value={formValues.background}
              onChange={handleInputChange}
              name="background"
              id="background"
            >
              <option value="white">White</option>
              <option value="faded">Faded</option>
              <option value="solid">Solid</option>
              <option value="rainbow" className={hideRainbow}>
                Rainbow
              </option>
            </FormSelect>
          </FormGroup>
          <FormGroup className={hideLogo}>
            <label htmlFor="logo">Logo</label>
            <FormSelect
              value={formValues.logo}
              onChange={handleInputChange}
              name="logo"
              id="logo"
            >
              <option value="inverse">Inverse</option>
              <option value="white">White</option>
            </FormSelect>
          </FormGroup>
          <Button
            outline
            theme="secondary"
            onClick={event => copyToClipboard(snippet, event, "Copy snippet")}
          >
            Copy snippet
          </Button>
        </Form>
      </CardBody>
    </Card>
  )
}
