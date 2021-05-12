import { setErrorMessage } from '~/utils/helperFunctions'

export default function ({ $axios }, inject) {
  inject('userApi', {
    getAllUsers,
  })

  async function getAllUsers() {
    try {
      return await $axios.$get('/users/')
    } catch (err) {
      setErrorMessage(err)
    }
  }
}
