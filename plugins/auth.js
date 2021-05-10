export default function ({ $axios }, inject) {
  const authServer = 'http://localhost:5000/api/v1'

  inject('authApi', {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword,
  })

  // Functions
  function setErrorMessage(err) {
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
  async function registerUser(user) {
    try {
      return await $axios.post(`${authServer}/signup`, user)
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function loginUser(user) {
    try {
      return await $axios.post(`${authServer}/login`, user)
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function forgotPassword(user) {
    try {
      return await $axios.patch(`${authServer}/forgotPassword`, user)
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function resetPassword(resetToken, user) {
    try {
      return await $axios.patch(
        `${authServer}/resetPassword/${resetToken}`,
        user
      )
    } catch (err) {
      setErrorMessage(err)
    }
  }
}
