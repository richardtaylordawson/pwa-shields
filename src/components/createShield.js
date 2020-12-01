import React, { useState } from "react"
import { Row, Col, Form, Card, Button } from "react-bootstrap"
import BootstrapSwitchButton from "bootstrap-switch-button-react"
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

  const handleInputChange = (event) => {
    event.persist()
    setFormValues((formValues) => {
      // set form values back to default values as user changes series
      if (event.target.name === "series") {
        formValues.color = "gray"
        formValues.background = "white"

        if (formValues.series === "react") {
          formValues.logo = "white"
        } else {
          formValues.logo = "inverse"
        }
      }

      // reset logo value when changing background of react series
      if (event.target.name === "background" && formValues.series === "react") {
        formValues.logo = event.target.value === "faded" ? "inverse" : "white"
      }

      return {
        ...formValues,
        [event.target.name]: event.target.value,
      }
    })
  }

  let logoURL = `/1.0.0/series/${formValues.series}`
  let hideBackgroundInput = false
  let hideLogoInput = false
  let hideRainbowOption = false
  let hideBlueOption = false
  let hideInverseOption = false

  if (formValues.series === "love") {
    hideLogoInput = true
    logoURL += `/${formValues.background}/${formValues.color}.svg`
  } else if (
    formValues.series === "certified" ||
    formValues.series === "install" ||
    formValues.series === "dark"
  ) {
    hideBackgroundInput = true
    hideLogoInput = true
    logoURL += `/${formValues.color}.svg`
  } else if (
    formValues.series === "classic" ||
    formValues.series === "gatsby"
  ) {
    hideRainbowOption = true
    hideBlueOption = true

    if (formValues.background !== "faded") {
      hideLogoInput = true
      logoURL += `/${formValues.background}/${formValues.color}.svg`
    } else {
      logoURL += `/${formValues.background}/${formValues.logo}/${formValues.color}.svg`
    }
  } else if (formValues.series === "react") {
    hideRainbowOption = true
    hideBlueOption = formValues.background !== "solid"
    hideInverseOption = formValues.background === "solid"

    if (formValues.background === "white") {
      hideLogoInput = true
      logoURL += `/${formValues.background}/${formValues.color}.svg`
    } else {
      logoURL += `/${formValues.background}/${formValues.logo}/${formValues.color}.svg`
    }
  }

  const snippet = linkCheckbox
    ? `[![PWA Shields](https://www.pwa-shields.com${logoURL})](${formValues.link})`
    : `![PWA Shields](https://www.pwa-shields.com${logoURL})`

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group>
            <div className="d-flex">
              <Form.Label htmlFor="preview" className="mr-3 mb-0">
                Preview:
              </Form.Label>
              <img src={logoURL} alt="shield preview" id="preview" />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="link">
              Link
              <Hint
                description={`This will allow your shield to act as a link to an external site.`}
                variant="outline-secondary"
                placement="right"
              />
            </Form.Label>
            <Form.Group className="d-flex align-items-center">
              <div className="mr-15px">
                <BootstrapSwitchButton
                  checked={linkCheckbox}
                  size="sm"
                  onlabel=" "
                  offlabel=" "
                  onstyle="success"
                  offstyle="dark"
                  height={30}
                  onChange={() => setLinkCheckbox((prevState) => !prevState)}
                />
              </div>
              <Form.Control
                type="url"
                disabled={!linkCheckbox}
                placeholder="https://pwa-shields.com"
                value={formValues.link}
                onChange={handleInputChange}
                name="link"
                id="link"
              />
            </Form.Group>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label htmlFor="series">Series</Form.Label>
                <Form.Control
                  as="select"
                  custom
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
                  <option value="gatsby">Gatsby</option>
                  <option value="react">React</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label htmlFor="color">Color</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  value={formValues.color}
                  onChange={handleInputChange}
                  name="color"
                  id="color"
                >
                  <option value="gray">Gray</option>
                  <option value="purple">Purple</option>
                  <option value="green">Green</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className={hideBackgroundInput ? "d-none" : ""}>
            <Form.Label htmlFor="background">Background</Form.Label>
            <Form.Control
              as="select"
              custom
              value={formValues.background}
              onChange={handleInputChange}
              name="background"
              id="background"
            >
              <option value="white">White</option>
              <option value="faded">Faded</option>
              <option value="solid">Solid</option>
              {!hideRainbowOption ? (
                <option value="rainbow">Rainbow</option>
              ) : (
                ""
              )}
            </Form.Control>
          </Form.Group>
          <Form.Group className={hideLogoInput ? "d-none" : ""}>
            <Form.Label htmlFor="logo">Logo</Form.Label>
            <Form.Control
              as="select"
              custom
              value={formValues.logo}
              onChange={handleInputChange}
              name="logo"
              id="logo"
            >
              {!hideInverseOption ? (
                <option value="inverse">Inverse</option>
              ) : (
                ""
              )}
              <option value="white">White</option>
              {!hideBlueOption ? <option value="blue">Blue</option> : ""}
            </Form.Control>
          </Form.Group>
          <Button
            variant="outline-secondary"
            className="copy-snippet-btn" // for gtm tracking
            onClick={(event) => copyToClipboard(snippet, event, "Copy snippet")}
          >
            Copy snippet
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
