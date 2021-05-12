import { setErrorMessage } from '~/utils/helperFunctions'

export default function ({ $axios }, inject) {
  inject('authApi', {
    registerUser,
    loginUser,
    forgotPassword,
    resetPassword,
    checkResetToken,
  })

  // Functions
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
