export default function ({ $axios }, inject) {
  const authServer = 'http://localhost:5000/api/v1'

  inject('authApi', {
    registerUser,
  })

  // Functions
  async function registerUser(user) {
    try {
      return await $axios.post(`${authServer}/signup`, user)
    } catch (err) {
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
  }
}
