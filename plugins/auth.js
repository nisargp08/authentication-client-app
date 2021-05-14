import { setErrorMessage } from '~/utils/helperFunctions'

export default function (context, inject) {
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
      return await context.$axios.post(`/signup`, user)
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function loginUser(user) {
    try {
      // Use auth module to login the user(look into nuxt.config file for more info)
      return await context.$auth.loginWith('local', { data: user })
      // return await context.$axios.post(`/login`, user)
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function forgotPassword(user) {
    try {
      return await context.$axios.patch(`/forgotPassword`, user)
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function resetPassword(resetToken, user) {
    try {
      return await context.$axios.patch(`/resetPassword/${resetToken}`, user)
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function checkResetToken(resetToken) {
    try {
      return await context.$axios.get(`/checkResetToken/${resetToken}`)
    } catch (err) {
      setErrorMessage(err)
    }
  }
}
