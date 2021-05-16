<template>
  <div>
    <icons-loading-spinner v-if="isLoading" />
    <form
      class="divide-y divide-gray-200"
      action="#"
      method="PATCH"
      @submit.prevent="updatePassword()"
    >
      <!-- Password section -->
      <div class="py-6 px-4 sm:p-6 lg:pb-8">
        <div>
          <h2 class="text-lg leading-6 font-medium text-gray-900">Password</h2>
          <p class="mt-1 text-sm text-gray-500">
            Change your account password here
          </p>
        </div>

        <div class="mt-6 grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-6 grid sm:grid-cols-1 gap-4">
            <div>
              <label
                for="passwordCurrent"
                class="block text-sm font-medium text-gray-700"
                >Current password</label
              >
              <input
                id="passwordCurrent"
                v-model="user.passwordCurrent"
                type="password"
                name="passwordCurrent"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >New password</label
              >
              <input
                id="password"
                v-model="user.password"
                type="password"
                name="password"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                for="passwordConfirm"
                class="block text-sm font-medium text-gray-700"
                >Confirm new password</label
              >
              <input
                id="passwordConfirm"
                v-model="user.passwordConfirm"
                type="password"
                name="passwordConfirm"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Submission and error handling -->
      <div class="py-4 px-4 mt-4">
        <template v-if="errMessages.length > 0">
          <alert class="mb-2" type="error" :messages="errMessages"></alert>
        </template>
        <div class="flex justify-end sm:px-6">
          <button
            type="submit"
            class="theme-button inline-flex items-center mt-0 w-auto"
          >
            Update Password
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import apiState from '~/mixins/apiState'
export default {
  mixins: [apiState],
  layout: 'settings',
  data() {
    return {
      isLoading: false,
      user: {
        passwordCurrent: '',
        password: '',
        passwordConfirm: '',
      },
    }
  },
  methods: {
    async updatePassword() {
      this.isLoading = true
      try {
        this.resetState()
        const { data } = await this.$userApi.updatePassword(this.user)
        if (data) {
          // Update the user token so that they don't have to relogin after a password change
          await this.$auth.setUserToken(data.token)
          // Give confirmation to user
          this.$notification.generate({
            title: 'Password has been successfully updated',
          })
        }
      } catch (err) {
        this.setErrorMessage(err)
      }
      this.isLoading = false
    },
  },
}
</script>
