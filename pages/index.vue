<template>
  <div>
    <icons-loading-spinner v-if="isLoading" />
    <template v-else-if="errMessages.length > 0">
      <api-error :messages="errMessages"></api-error>
    </template>
    <div v-else class="m-8">
      <template v-if="users.length <= 0">
        <no-user-state class="text-white">
          <h1 class="text-base sm:text-xl sm:leading-10 font-medium">
            Looks like no users are available for display!
          </h1>
          <h3
            class="text-sm sm:text-base font-medium text-gray-400 mt-2 sm:mt-0"
          >
            Register now to be the first 😁
          </h3>
        </no-user-state>
      </template>
      <template v-else>
        <h1 class="text-2xl font-semibold text-gray-300">User's List</h1>
        <div class="mt-2 pt-8 border-t border-gray-700">
          <elements-grid>
            <elements-cards
              v-for="(user, index) in users"
              :key="index"
              :user="user"
            ></elements-cards>
          </elements-grid>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import apiState from '~/mixins/apiState'
export default {
  mixins: [apiState],
  data() {
    return {
      users: [],
      isLoading: false,
    }
  },
  async created() {
    this.isLoading = true
    try {
      this.resetState()
      const { status, data } = await this.$userApi.getAllUsers()
      if (status === 'success') {
        this.users = data
      }
    } catch (err) {
      this.setErrorMessage(err)
    }
    this.isLoading = false
  },
}
</script>
