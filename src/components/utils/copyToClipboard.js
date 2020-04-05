/**
 * Copies a value to the user's clipboard
 * @param {string} value - The value to copy to the clipboard
 * @param {object} event - The event object that fires the copy event
 * @param {string} eventAfterText - The text that will be changed once the event is complete
 */
export const copyToClipboard = (value, event, eventAfterText) => {
  const tempElement = document.createElement("textarea")
  tempElement.value = value
  tempElement.setAttribute("readonly", "")
  tempElement.style.position = "absolute"
  tempElement.style.left = "-9999px"
  document.body.appendChild(tempElement)
  tempElement.select()
  document.execCommand("copy")
  document.body.removeChild(tempElement)
  document.execCommand("copy")

  event.currentTarget.innerText = "Copied!"

  setTimeout(
    (element) => {
      element.innerText = eventAfterText
    },
    1000,
    event.currentTarget
  )
}
