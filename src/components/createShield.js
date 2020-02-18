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
    setFormValues(formValues => {
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
      <CardBody>
        <Form>
          <FormGroup>
            <div className="d-flex">
              <label htmlFor="preview" className="mr-3 mb-0">
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
                onClick={() => setLinkCheckbox(prevState => !prevState)}
                onChange={() => setLinkCheckbox(prevState => !prevState)} // must have both events to fix safari & safari mobile
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
                  <option value="gatsby">Gatsby</option>
                  <option value="react">React</option>
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
          <FormGroup className={hideBackgroundInput ? "d-none" : ""}>
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
              {!hideRainbowOption ? (
                <option value="rainbow">Rainbow</option>
              ) : (
                ""
              )}
            </FormSelect>
          </FormGroup>
          <FormGroup className={hideLogoInput ? "d-none" : ""}>
            <label htmlFor="logo">Logo</label>
            <FormSelect
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
            </FormSelect>
          </FormGroup>
          <Button
            outline
            theme="secondary"
            className="copy-snippet-btn" // for gtm tracking
            onClick={event => copyToClipboard(snippet, event, "Copy snippet")}
          >
            Copy snippet
          </Button>
        </Form>
      </CardBody>
    </Card>
  )
}
