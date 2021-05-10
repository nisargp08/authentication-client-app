<template>
  <div class="min-h-screen bg-white flex">
    <div
      class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img
            class="h-14 w-auto"
            src="/images/one-piece-logo.png"
            alt="Company Logo"
          />
          <h2 class="mt-4 text-3xl font-extrabold text-gray-900">
            Forgot Password?
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            To reset your password, enter your email below and submit. An email
            will be sent to you with instructions about how to complete the
            process.
          </p>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form
              action="#"
              method="POST"
              class="space-y-3"
              @submit.prevent="forgotPassword()"
            >
              <!-- Email -->
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    v-model="user.email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    placeholder="you@example.com"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>
              </div>
              <!-- Error message -->
              <template v-if="errMessages.length > 0">
                <div
                  class="text-sm bg-red-100 text-red-700 font-medium rounded-md py-2 px-4"
                >
                  <p v-for="(error, index) in errMessages" :key="index">
                    {{ error }}
                  </p>
                </div>
              </template>
              <!-- Success message -->
              <template v-if="sucMessages.length > 0">
                <div
                  class="text-sm bg-green-100 text-green-700 font-medium rounded-md py-2 px-4"
                >
                  <p v-for="(success, index) in sucMessages" :key="index">
                    {{ success }}
                  </p>
                </div>
              </template>
              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 mt-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Send Recovery Email
                </button>
              </div>
              <div class="flex items-center justify-center">
                <div class="text-sm text-center">
                  <nuxt-link
                    :to="{ name: 'login' }"
                    class="font-medium text-yellow-600 hover:text-yellow-500"
                  >
                    Login now
                  </nuxt-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="/images/login-bg.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
      },
      errMessages: [],
      sucMessages: [],
    }
  },
  methods: {
    async forgotPassword() {
      try {
        this.resetState()
        const response = await this.$authApi.forgotPassword(this.user)
        // User was successfully authenticated
        if (response.status === 200) {
          this.sucMessages.push(response.data.data.message)
        }
      } catch (err) {
        if (err.message.includes(',')) {
          const messages = err.message.split(',')
          this.errMessages = messages
        } else {
          this.errMessages.push(err.message)
        }
      }
    },
    resetState() {
      this.errMessages = []
      this.sucMessages = []
    },
  },
}
</script>

<style></style>
