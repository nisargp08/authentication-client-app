<template>
  <section>
    <template v-if="isPageDisabled">
      <div
        class="bg-gray-900 flex flex-col items-center justify-center min-h-screen h-full"
      >
        <img class="rounded-md" src="/images/error.webp" alt="Error" />
        <div class="flex items-center justify-center mt-6">
          <div class="text-sm text-center">
            <nuxt-link :to="{ name: 'login' }" class="theme-button">
              Login now
            </nuxt-link>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="min-h-screen bg-white flex">
        <div
          class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
        >
          <div class="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <logo></logo>
              <h2 class="split-title">Reset Password</h2>
            </div>

            <div class="mt-8">
              <div class="mt-6">
                <form
                  action="#"
                  class="space-y-3"
                  @submit.prevent="resetPassword()"
                >
                  <!-- Password -->
                  <div>
                    <label for="password" class="form-label"> Password </label>
                    <div class="mt-1">
                      <input
                        id="password"
                        v-model="user.password"
                        name="password"
                        type="password"
                        required
                        placeholder="Enter your new password here"
                        class="form-input"
                      />
                    </div>
                  </div>
                  <!-- Confirm Password -->
                  <div>
                    <label for="passwordConfirm" class="form-label">
                      Password Confirm
                    </label>
                    <div class="mt-1">
                      <input
                        id="passwordConfirm"
                        v-model="user.passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        required
                        placeholder="Confirm your new password"
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
                      Reset Password
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
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: { Logo },
  async asyncData({ params, $authApi }) {
    const id = params.id
    const sucMessages = []
    let errMessages = []
    let isPageDisabled = true
    try {
      const response = await $authApi.checkResetToken(id)
      if (response.data.status === 'success') {
        isPageDisabled = false
      }
    } catch (err) {
      if (err.message.includes(',')) {
        const messages = err.message.split(',')
        errMessages = messages
      } else {
        errMessages.push(err.message)
      }
    }
    return {
      id,
      isPageDisabled,
      errMessages,
      sucMessages,
    }
  },
  data() {
    return {
      user: {
        password: '',
        passwordConfirm: '',
      },
    }
  },
  methods: {
    async resetPassword() {
      try {
        this.resetState()
        const response = await this.$authApi.resetPassword(this.id, this.user)
        // User was successfully authenticated
        if (response.status === 200) {
          this.user.password = ''
          this.user.passwordConfirm = ''
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
