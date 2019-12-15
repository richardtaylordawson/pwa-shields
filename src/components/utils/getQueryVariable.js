/**
* Searches the url for a given key
* @param {string} variable - The key to search in the url
* @return {string} - Returns the string value if the key is found, otherwise false is returned
*/
export const getQueryVariable = (variable) => {
  const query = window.location.search.substring(1)
  const vars = query.split("&")

  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=")

    if(pair[0] === variable) {
      return pair[1]
    }
  }

  return(false)
}
