<template>
  <div class="mx-auto w-full max-w-sm lg:w-96">
    <div>
      <logo class="h-12"></logo>
      <h2 class="split-title">
        Login to <span class="text-yellow-600">Auth</span>
      </h2>
      <p class="mt-2 text-sm text-gray-600">
        To
        <a href="#" class="font-medium theme-link">
          do absolutely nothing 😁
        </a>
      </p>
    </div>

    <div class="mt-8">
      <div>
        <!-- Social Login -->
        <social-auth mode="Login"></social-auth>
        <div class="mt-6 relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500"> Or continue with </span>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <form action="#" class="space-y-3" @submit.prevent="loginUser()">
          <!-- Email -->
          <div>
            <label for="userId" class="form-label"> Username/Email </label>
            <div class="mt-1">
              <input
                id="userId"
                v-model="user.userId"
                name="userId"
                type="text"
                autocomplete="email"
                required
                placeholder="ana99 / you@example.com"
                class="form-input"
              />
            </div>
          </div>
          <!-- Password -->
          <div class="space-y-1">
            <label for="password" class="form-label"> Password </label>
            <div class="mt-1">
              <input
                id="password"
                v-model="user.password"
                name="password"
                type="password"
                autocomplete="password"
                placeholder="********"
                required
                class="form-input"
              />
            </div>
          </div>
          <!-- FOrgot password -->
          <div class="flex items-center justify-end">
            <div class="text-sm">
              <nuxt-link
                :to="{ name: 'forgotPassword' }"
                class="font-medium theme-link"
              >
                Forgot your password?
              </nuxt-link>
            </div>
          </div>
          <!-- Error message -->
          <template v-if="errMessages.length > 0">
            <alert type="error" :messages="errMessages"></alert>
          </template>
          <div>
            <button type="submit" class="theme-button">Login</button>
          </div>
          <div class="flex items-center justify-center">
            <div class="text-sm text-center">
              <p class="font-medium text-gray-500">Don't have an account?</p>
              <nuxt-link
                :to="{ name: 'signup' }"
                class="font-medium theme-link"
              >
                Sign up here
              </nuxt-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import apiState from '~/mixins/apiState.js'
export default {
  mixins: [apiState],
  layout: 'splitPage',
  data() {
    return {
      user: {
        userId: '',
        password: '',
      },
    }
  },
  methods: {
    async loginUser() {
      try {
        this.resetState()
        await this.$authApi.loginUser(this.user)
      } catch (err) {
        this.setErrorMessage(err)
      }
    },
  },
}
</script>

<style></style>
