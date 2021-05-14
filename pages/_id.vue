<template>
  <div class="self-start">
    <icons-loading-spinner v-if="isLoading">
      <p class="text-white font-medium mt-2">Loading...</p>
    </icons-loading-spinner>
    <template v-else-if="errMessages.length > 0">
      <h1 class="text-center text-2xl font-semibold text-red-500">
        Oops ! Error Occured 💥
      </h1>
      <div class="w-56 sm:w-80 mt-8">
        <img src="/images/error.svg" alt="Error" />
      </div>
      <alert class="mt-4" type="error" :messages="errMessages"></alert>
    </template>
    <template v-else>
      <div class="m-8">
        <h1>User data</h1>
        <p>{{ user }}</p>
      </div>
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
