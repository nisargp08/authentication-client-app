export default function ({ $axios }, inject) {
  inject('authApi', {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword,
    checkResetToken,
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
      return await $axios.post(`/signup`, user)
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function loginUser(user) {
    try {
      return await $axios.post(`/login`, user)
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function forgotPassword(user) {
    try {
      return await $axios.patch(`/forgotPassword`, user)
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function resetPassword(resetToken, user) {
    try {
      return await $axios.patch(`/resetPassword/${resetToken}`, user)
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function checkResetToken(resetToken) {
    try {
      return await $axios.get(`/checkResetToken/${resetToken}`)
    } catch (err) {
      setErrorMessage(err)
    }
  }
}
