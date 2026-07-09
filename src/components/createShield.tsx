import * as React from "react"
import Button from "react-bootstrap/cjs/Button.js"
import Card from "react-bootstrap/cjs/Card.js"
import Col from "react-bootstrap/cjs/Col.js"
import Form from "react-bootstrap/cjs/Form.js"
import Row from "react-bootstrap/cjs/Row.js"
import { copyToClipboard } from "./utils/copyToClipboard"
import { getQueryVariable } from "./utils/getQueryVariable"
import { Hint } from "./hint"

type ShieldSeries =
  | "classic"
  | "certified"
  | "install"
  | "dark"
  | "love"
  | "gatsby"
  | "react"

type ShieldColor = "gray" | "purple" | "green"
type ShieldBackground = "white" | "faded" | "solid" | "rainbow"
type ShieldLogo = "inverse" | "white" | "blue"

type FormValues = {
  series: ShieldSeries
  color: ShieldColor
  background: ShieldBackground
  logo: ShieldLogo
  link: string
}

const isShieldSeries = (value: string | undefined): value is ShieldSeries =>
  value === "classic" ||
  value === "certified" ||
  value === "install" ||
  value === "dark" ||
  value === "love" ||
  value === "gatsby" ||
  value === "react"

const isShieldColor = (value: string): value is ShieldColor =>
  value === "gray" || value === "purple" || value === "green"

const isShieldBackground = (value: string): value is ShieldBackground =>
  value === "white" ||
  value === "faded" ||
  value === "solid" ||
  value === "rainbow"

const isShieldLogo = (value: string): value is ShieldLogo =>
  value === "inverse" || value === "white" || value === "blue"

const CreateShield = () => {
  const [linkCheckbox, setLinkCheckbox] = React.useState(false)
  const querySeries = getQueryVariable("series")
  const [formValues, setFormValues] = React.useState<FormValues>({
    series: isShieldSeries(querySeries) ? querySeries : "classic",
    color: "gray",
    background: "white",
    logo: "inverse",
    link: "",
  })

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target

    setFormValues((currentValues) => {
      const nextValues: FormValues = {
        ...currentValues,
      }

      if (name === "series" && isShieldSeries(value)) {
        nextValues.series = value
      } else if (name === "color" && isShieldColor(value)) {
        nextValues.color = value
      } else if (name === "background" && isShieldBackground(value)) {
        nextValues.background = value
      } else if (name === "logo" && isShieldLogo(value)) {
        nextValues.logo = value
      } else if (name === "link") {
        nextValues.link = value
      }

      // set form values back to default values as user changes series
      if (name === "series") {
        nextValues.color = "gray"
        nextValues.background = "white"

        if (value === "react") {
          nextValues.logo = "white"
        } else {
          nextValues.logo = "inverse"
        }
      }

      // reset logo value when changing background of react series
      if (name === "background" && currentValues.series === "react") {
        nextValues.logo = value === "faded" ? "inverse" : "white"
      }

      return nextValues
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
          <Form.Group className="mb-3">
            <div className="d-flex">
              <Form.Label htmlFor="preview" className="me-3 mb-0">
                Preview:
              </Form.Label>
              <img src={logoURL} alt="shield preview" id="preview" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="link">
              Link
              <Hint
                description={`This will allow your shield to act as a link to an external site.`}
                variant="outline-secondary"
                placement="right"
              />
            </Form.Label>
            <Form.Group className="d-flex align-items-center">
              <div className="me-15px">
                <Form.Check
                  aria-label="Enable link"
                  checked={linkCheckbox}
                  type="switch"
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
                <Form.Select
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
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label htmlFor="color">Color</Form.Label>
                <Form.Select
                  value={formValues.color}
                  onChange={handleInputChange}
                  name="color"
                  id="color"
                >
                  <option value="gray">Gray</option>
                  <option value="purple">Purple</option>
                  <option value="green">Green</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className={hideBackgroundInput ? "d-none" : ""}>
            <Form.Label htmlFor="background">Background</Form.Label>
            <Form.Select
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
            </Form.Select>
          </Form.Group>
          <Form.Group className={hideLogoInput ? "d-none" : ""}>
            <Form.Label htmlFor="logo">Logo</Form.Label>
            <Form.Select
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
            </Form.Select>
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

export default CreateShield
