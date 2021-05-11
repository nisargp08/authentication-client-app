<template>
  <div class="min-h-screen bg-white flex">
    <div
      class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <logo></logo>
          <h2 class="split-title">Forgot Password?</h2>
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
              class="space-y-3"
              @submit.prevent="forgotPassword()"
            >
              <!-- Email -->
              <div>
                <label for="email" class="form-label"> Email address </label>
                <div class="mt-1">
                  <input
                    id="email"
                    v-model="user.email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    placeholder="you@example.com"
                    class="form-input"
                  />
                </div>
              </div>
              <!-- Error message -->
              <template v-if="errMessages.length > 0">
                <alert type="error" :messages="errMessages"></alert>
              </template>
              <!-- Success message -->
              <template v-if="sucMessages.length > 0">
                <alert type="success" :messages="sucMessages"></alert>
              </template>
              <div>
                <button type="submit" class="theme-button">
                  Send Recovery Email
                </button>
              </div>
              <div class="flex items-center justify-center">
                <div class="text-sm text-center">
                  <nuxt-link
                    :to="{ name: 'login' }"
                    class="font-medium theme-link"
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
          this.user.email = ''
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
