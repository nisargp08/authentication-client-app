<template>
  <div class="w-full">
    <icons-loading-spinner v-if="isLoading">
      <p class="text-white font-medium mt-2">Loading...</p>
    </icons-loading-spinner>
    <template v-else-if="errMessages.length > 0">
      <api-error :messages="errMessages"></api-error>
    </template>
    <template v-else>
      <user-profile :user="user"></user-profile>
    </template>
  </div>
</template>

<script>
import apiState from '~/mixins/apiState'

export default {
  mixins: [apiState],
  middleware: 'auth',
  data() {
    return {
      user: null,
      isLoading: false,
    }
  },
  async created() {
    this.isLoading = true
    try {
      this.resetState()
      const { data } = await this.$userApi.getUserById(this.$route.params.id)
      if (data) {
        this.user = data
      }
    } catch (err) {
      this.setErrorMessage(err)
    }
    this.isLoading = false
  },
}
</script>

<style></style>
