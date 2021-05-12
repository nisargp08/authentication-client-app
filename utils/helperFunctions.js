export function setErrorMessage(err) {
  let errMessage = ''
  if (err.response) {
    // client received an error response (5xx, 4xx)
    errMessage = err.response.data.message
  } else {
    // Unknown error occured
    errMessage = 'Network Error. Please try again later'
  }
  throw new Error(errMessage)
}
