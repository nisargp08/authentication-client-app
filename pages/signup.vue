<template>
  <div class="mx-auto w-full max-w-sm lg:w-96">
    <div>
      <logo class="h-12"></logo>
      <h2 class="split-title">
        Sign up to join <span class="text-yellow-600">Auth</span>
      </h2>
    </div>

    <div class="mt-8">
      <div>
        <!-- Social signup icons -->
        <social-auth mode="Sign up"></social-auth>
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
        <form action="#" class="space-y-3" @submit.prevent="registerUser()">
          <!-- Username -->
          <div>
            <label for="username" class="form-label"> Username </label>
            <div class="mt-1">
              <input
                id="username"
                v-model="user.username"
                name="username"
                type="text"
                placeholder="ana99"
                autocomplete="username"
                required
                class="form-input"
              />
            </div>
          </div>
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
                placeholder="you@example.com"
                required
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
                placeholder="********"
                required
                class="form-input"
              />
            </div>
          </div>
          <!-- Password confirm -->
          <div class="space-y-1">
            <label for="passwordConfirm" class="form-label">
              Password Confirm
            </label>
            <div class="mt-1">
              <input
                id="passwordConfirm"
                v-model="user.passwordConfirm"
                name="passwordConfirm"
                type="password"
                placeholder="********"
                required
                class="form-input"
              />
            </div>
          </div>
          <!-- Error message -->
          <template v-if="errMessages.length > 0">
            <alert type="error" :messages="errMessages"></alert>
          </template>
          <div>
            <button type="submit" class="theme-button">Sign up</button>
          </div>
          <div class="flex items-center justify-center">
            <div class="text-sm text-center">
              <p class="font-medium text-gray-500">Already got an account?</p>
              <nuxt-link :to="{ name: 'login' }" class="font-medium theme-link">
                Login now
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
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
      },
    }
  },
  methods: {
    async registerUser() {
      try {
        this.resetState()
        const response = await this.$authApi.registerUser(this.user)
        // User was successfully created
        if (response.status === 201) {
          this.$router.push({ name: 'login' })
        }
      } catch (err) {
        this.setErrorMessage(err)
      }
    },
  },
}
</script>

<style></style>
