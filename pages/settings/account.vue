<template>
  <div>
    <icons-loading-spinner v-if="isLoading" />
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
      <div class="bg-gray-50 shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Delete your account
          </h3>
          <div class="max-w-xl mt-1 text-sm text-gray-500">
            <p>
              Once you delete your account, there is no going back. Please be
              certain 💀
            </p>
          </div>
          <div class="mt-5">
            <button
              type="button"
              class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
              @click="deleteAccount()"
            >
              Delete account
            </button>
          </div>
        </div>
      </div>
    </div>
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
    }
  },
  methods: {
    async deleteAccount() {
      this.isLoading = true
      if (confirm('Are you sure about deleting your account ?')) {
        try {
          this.resetState()
          await this.$userApi.deleteUser()
          // Delete confirmation
          this.$notification.generate({
            title: 'Account has been successfully deleted',
          })
          // Logout to clear token
          this.$auth.logout('local')
        } catch (err) {
          this.setErrorMessage(err)
        }
      }
      this.isLoading = false
    },
  },
}
</script>
