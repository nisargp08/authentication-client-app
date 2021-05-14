export function setErrorMessage(err) {
  let errMessage = ''
  if (err.response) {
    // Too many requests from one IP error
    if (err.response.status === 429) {
      errMessage = err.response.data
    } else {
      // Client recieved an operational error from our api
      errMessage = err.response.data.message
    }
  } else {
    // Unknown error occured
    errMessage = 'Network Error. Please try again later'
  }
  throw new Error(errMessage)
}
