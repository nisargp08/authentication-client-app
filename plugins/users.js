import { setErrorMessage } from '~/utils/helperFunctions'

export default function ({ $axios }, inject) {
  inject('userApi', {
    getAllUsers,
    getUserById,
    updateUser,
  })

  async function getAllUsers() {
    try {
      return await $axios.$get('/users/')
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function getUserById(id) {
    try {
      return await $axios.$get(`/users/${id}`)
    } catch (err) {
      setErrorMessage(err)
    }
  }
  async function updateUser(user) {
    try {
      return await $axios.$patch(`/users/updateProfile/`, user)
    } catch (err) {
      setErrorMessage(err)
    }
  }
}
